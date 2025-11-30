import type {
  UploadEmailRequest,
  UploadEmailResponse,
  BackendParsedEmail,
  LLMAnalysis,
  AnalyzeResponse,
  SaveResponse,
} from "../types";

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
 * Get summary of emails from backend
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

/**
 * Save emails to file
 * POST /api/emails/save/
 */
export async function saveEmails(destinationPath: string): Promise<SaveResponse> {
  const response = await fetch(`${API_BASE}/emails/save/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_path: destinationPath }),
  });

  return handleResponse<SaveResponse>(response);
}

/**
 * Get analysis history
 * GET /api/analyze/
 */
export async function getAnalysisHistory(): Promise<LLMAnalysis[]> {
  const response = await fetch(`${API_BASE}/analyze/`);
  return handleResponse<LLMAnalysis[]>(response);
}

/**
 * Send question to LLM for analysis
 * POST /api/analyze/
 * Note: This can be slow as it calls LLM
 */
export async function analyzeEmails(question: string): Promise<AnalyzeResponse> {
  const response = await fetch(`${API_BASE}/analyze/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: question }),
  });

  return handleResponse<AnalyzeResponse>(response);
}

/**
 * Save analysis to file
 * POST /api/analyze/save
 */
export async function saveAnalysis(destinationPath: string): Promise<SaveResponse> {
  const response = await fetch(`${API_BASE}/analyze/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_path: destinationPath }),
  });

  return handleResponse<SaveResponse>(response);
}

export { ApiError };
