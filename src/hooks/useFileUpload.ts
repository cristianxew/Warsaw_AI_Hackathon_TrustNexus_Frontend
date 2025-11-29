import { useState, useCallback } from "react";
import type { UploadedFile } from "../types";
import { uploadEmailPath } from "../api/client";

interface UseFileUploadOptions {
  onUploadComplete?: (message: string) => void;
  onError?: (error: Error) => void;
}

interface UseFileUploadReturn {
  files: UploadedFile[];
  folderPath: string | null;
  isUploading: boolean;
  result: string | null;
  error: string | null;
  addFiles: (newFiles: File[]) => void;
  setFolderPath: (path: string, files: File[]) => void;
  removeFile: (fileId: string) => void;
  clearFiles: () => void;
  processFiles: () => Promise<void>;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function useFileUpload(
  options: UseFileUploadOptions = {}
): UseFileUploadReturn {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [folderPath, setFolderPathState] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addFiles = useCallback((newFiles: File[]) => {
    const uploadedFiles: UploadedFile[] = newFiles.map((file) => ({
      id: generateId(),
      file,
      status: "pending" as const,
    }));
    setFiles((prev) => [...prev, ...uploadedFiles]);
    setFolderPathState(null); // Clear folder path when adding individual files
  }, []);

  const setFolderPath = useCallback((path: string, folderFiles: File[]) => {
    setFolderPathState(path);
    const uploadedFiles: UploadedFile[] = folderFiles.map((file) => ({
      id: generateId(),
      file,
      status: "pending" as const,
    }));
    setFiles(uploadedFiles);
  }, []);

  const removeFile = useCallback((fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  }, []);

  const clearFiles = useCallback(() => {
    setFiles([]);
    setFolderPathState(null);
    setResult(null);
    setError(null);
  }, []);

  const updateFileStatus = useCallback(
    (
      fileId: string,
      status: UploadedFile["status"],
      errorMessage?: string
    ) => {
      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileId ? { ...f, status, errorMessage } : f
        )
      );
    },
    []
  );

  const processFiles = useCallback(async () => {
    const pendingFiles = files.filter((f) => f.status === "pending");
    if (pendingFiles.length === 0) return;

    setIsUploading(true);
    setError(null);
    setResult(null);

    // Mark all files as processing
    pendingFiles.forEach((f) => updateFileStatus(f.id, "processing"));

    try {
      // Send folder path or file info to backend
      const pathToSend = folderPath || pendingFiles[0].file.name;
      const response = await uploadEmailPath(pathToSend);
      console.log(response);

      // Mark all files as success
      pendingFiles.forEach((f) => updateFileStatus(f.id, "success"));
      setResult(response.message || "Files processed successfully");
      options.onUploadComplete?.(response.message);


    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to upload files";

      // Mark all files as error
      pendingFiles.forEach((f) => updateFileStatus(f.id, "error", errorMessage));
      setError(errorMessage);
      options.onError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setIsUploading(false);
    }
  }, [files, folderPath, updateFileStatus, options]);

  return {
    files,
    folderPath,
    isUploading,
    result,
    error,
    addFiles,
    setFolderPath,
    removeFile,
    clearFiles,
    processFiles,
  };
}
