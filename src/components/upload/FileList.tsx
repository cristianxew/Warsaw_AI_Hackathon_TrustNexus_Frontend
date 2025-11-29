import type { UploadedFile } from "../../types";
import { Spinner } from "../ui";

interface FileListProps {
  files: UploadedFile[];
  onRemove?: (fileId: string) => void;
}

export function FileList({ files, onRemove }: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-slate-400">
          Uploaded Files ({files.length})
        </h4>
      </div>

      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
        {files.map((file) => (
          <FileListItem key={file.id} file={file} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}

function FileListItem({
  file,
  onRemove,
}: {
  file: UploadedFile;
  onRemove?: (fileId: string) => void;
}) {
  const statusConfig = {
    pending: {
      icon: <PendingIcon />,
      text: "Pending",
      className: "text-slate-400",
    },
    processing: {
      icon: <Spinner size="sm" />,
      text: "Processing...",
      className: "text-indigo-400",
    },
    success: {
      icon: <SuccessIcon />,
      text: "Processed",
      className: "text-emerald-400",
    },
    error: {
      icon: <ErrorIcon />,
      text: "Failed",
      className: "text-red-400",
    },
  };

  const status = statusConfig[file.status];
  const extension = file.file.name.split(".").pop()?.toUpperCase() || "FILE";

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-colors">
      {/* File type icon */}
      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
        <span className="text-[10px] font-semibold text-indigo-400 tracking-wider">
          {extension}
        </span>
      </div>

      {/* File info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{file.file.name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs text-slate-500">
            {formatFileSize(file.file.size)}
          </span>
          <span className={`text-xs ${status.className} flex items-center gap-1`}>
            {status.icon}
            {status.text}
          </span>
        </div>
        {file.errorMessage && (
          <p className="text-xs text-red-400 mt-1 truncate">{file.errorMessage}</p>
        )}
      </div>

      {/* Remove button */}
      {onRemove && file.status !== "processing" && (
        <button
          onClick={() => onRemove(file.id)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all"
          aria-label="Remove file"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

function PendingIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}
