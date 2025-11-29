import { useState, useCallback } from "react";

const ACCEPTED_EXTENSIONS = [".eml", ".txt", ".msg"];

interface FileSelectProps {
  onFolderSelected: (folderPath: string, files: File[]) => void;
  disabled?: boolean;
}

export function FileSelect({
  onFolderSelected,
  disabled = false,
}: FileSelectProps) {
  const [error, setError] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const handleFolderSelect = useCallback(async () => {
    if (disabled) return;

    try {
      // Check if the API is available
      if (!("showDirectoryPicker" in window)) {
        setError("Folder picker not supported in this browser. Use Chrome or Edge.");
        setTimeout(() => setError(null), 5000);
        return;
      }

      // Open folder picker - using type assertion for File System Access API
      const showDirectoryPicker = (window as unknown as { showDirectoryPicker: () => Promise<FileSystemDirectoryHandle> }).showDirectoryPicker;
      const dirHandle = await showDirectoryPicker();

      const folderName = dirHandle.name;
      const collectedFiles: File[] = [];

      // Iterate through folder entries using async iterator
      // @ts-expect-error - File System Access API not fully typed
      for await (const entry of dirHandle.values()) {
        if (entry.kind === "file") {
          const extension = "." + entry.name.split(".").pop()?.toLowerCase();
          if (ACCEPTED_EXTENSIONS.includes(extension)) {
            const file = await (entry as FileSystemFileHandle).getFile();
            collectedFiles.push(file);
          }
        }
      }

      if (collectedFiles.length === 0) {
        setError("No email files (.eml, .txt, .msg) found in folder");
        setTimeout(() => setError(null), 5000);
        return;
      }

      setSelectedFolder(folderName);
      onFolderSelected(folderName, collectedFiles);
    } catch (err) {
      // User cancelled or error occurred
      if ((err as Error).name !== "AbortError") {
        setError("Failed to select folder");
        setTimeout(() => setError(null), 5000);
      }
    }
  }, [disabled, onFolderSelected]);

  return (
    <div className="space-y-3">
      {/* Folder picker button */}
      <button
        type="button"
        onClick={handleFolderSelect}
        disabled={disabled}
        className={`
          w-full flex flex-col items-center justify-center gap-4 px-6 py-8
          rounded-xl border-2 border-dashed border-white/10 bg-white/[0.02]
          text-sm font-medium text-slate-300
          hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white
          transition-all duration-200
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        {/* Folder Icon */}
        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-white mb-1">
            Select Email Folder
          </p>
          <p className="text-xs text-slate-500">
            Choose a folder containing your email files
          </p>
        </div>

        {/* Accepted formats */}
        <div className="flex items-center gap-2">
          {ACCEPTED_EXTENSIONS.map((ext) => (
            <span
              key={ext}
              className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 uppercase tracking-wider"
            >
              {ext}
            </span>
          ))}
        </div>
      </button>

      {/* Selected folder indicator */}
      {selectedFolder && (
        <div className="flex items-center gap-2 text-sm text-indigo-400 bg-indigo-500/10 px-3 py-2 rounded-lg border border-indigo-500/20">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          Selected: {selectedFolder}
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
