export interface UploadedFile {
  id: string;
  file: File;
  status: "pending" | "processing" | "success" | "error";
  errorMessage?: string;
  parsedEmailId?: string;
}

