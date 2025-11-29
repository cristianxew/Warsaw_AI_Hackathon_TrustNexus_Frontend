
// Email upload endpoint
export interface UploadEmailRequest {
  email_path: string;
}

export interface UploadEmailResponse {
  message: string;
}


// Parsed email from backend GET /emails/
export interface BackendParsedEmail {
  sender_name: string;
  sender_email: string;
  recipient_name: string | null;
  recipient_email: string;
  subject: string;
  date: string;
  message_content: string | null;
}
