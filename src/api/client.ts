import type { UploadEmailRequest, UploadEmailResponse, BackendParsedEmail } from "../types";

// Use /api prefix to go through Vite proxy (avoids CORS issues in dev)
const API_BASE = import.meta.env.VITE_API_URL || "/api";

class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(response.status, errorText || response.statusText);
  }
  return response.json();
}

/**
 * Upload email path to backend for processing
 * POST /api/emails/
 */
export async function uploadEmailPath(
  emailPath: string
): Promise<UploadEmailResponse> {
  const request: UploadEmailRequest = { email_path: emailPath };

  const response = await fetch(`${API_BASE}/emails/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return handleResponse<UploadEmailResponse>(response);
}

/**
 * Get parsed emails from backend
 * GET /api/emails/
 */
export async function getParsedEmails(): Promise<BackendParsedEmail[]> {
  const response = await fetch(`${API_BASE}/emails/`);
  return handleResponse<BackendParsedEmail[]>(response);
}

/**
 * Health check endpoint
 * GET /api/test/
 */
export async function healthCheck(): Promise<{ status: string }> {
  const response = await fetch(`${API_BASE}/test/`);
  return handleResponse<{ status: string }>(response);
}

export { ApiError };
