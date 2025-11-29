// Email upload endpoint
export interface UploadEmailRequest {
  email_path: string;
}

export interface UploadEmailResponse {
  message: string;
}

// Parsed email from backend GET /emails/
// All fields can be null per FRONTEND_GUIDE.md
export interface BackendParsedEmail {
  sender_name: string | null;
  sender_email: string | null;
  recipient_name: string | null;
  recipient_email: string | null;
  subject: string | null;
  date: string | null;
  message_content: string | null;
}

// LLM Analysis types for chat feature
export interface LLMAnalysis {
  question: string | null;
  answer: string | null;
}

export interface AnalyzeRequest {
  text: string;
}

export interface AnalyzeResponse {
  emails: string; // LLM response text
}

export interface SaveRequest {
  email_path: string;
}

export interface SaveResponse {
  message: string;
}
