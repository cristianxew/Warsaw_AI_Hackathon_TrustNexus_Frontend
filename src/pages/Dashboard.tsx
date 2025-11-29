import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  DashboardLayout,
  DashboardContent,
  PageHeader,
} from "../components/layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Button,
  Badge,
  NoDataEmptyState,
  Spinner,
} from "../components/ui";
import { FileSelect, FileList } from "../components/upload";
import { useFileUpload } from "../hooks";
import { getParsedEmails } from "../api/client";
import type { BackendParsedEmail } from "../types";

export function Dashboard() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/export" element={<ExportPage />} />
      </Routes>
    </DashboardLayout>
  );
}

// Upload Page - Main entry point
function UploadPage() {
  const [parsedEmails, setParsedEmails] = useState<BackendParsedEmail[]>([]);
  const [isLoadingEmails, setIsLoadingEmails] = useState(false);
  const [emailsError, setEmailsError] = useState<string | null>(null);

  const fetchEmails = async () => {
    setIsLoadingEmails(true); 
    setEmailsError(null);
    try {
      const emails = await getParsedEmails();
      setParsedEmails(emails);
    } catch (err) {
      setEmailsError(err instanceof Error ? err.message : "Failed to fetch emails");
    } finally {
      setIsLoadingEmails(false);
    }
  };

  // Fetch emails on page load
  useEffect(() => {
    fetchEmails();
  }, []);

  const {
    files,
    isUploading,
    result,
    error,
    setFolderPath,
    removeFile,
    clearFiles,
    processFiles,
  } = useFileUpload({
    onUploadComplete: (message) => {
      console.log("Upload complete:", message);
      // Fetch parsed emails after successful upload
      fetchEmails();
    },
  });

  const pendingCount = files.filter((f) => f.status === "pending").length;

  return (
    <DashboardContent>
      <PageHeader
        title="Upload Emails"
        description="Process email files to extract organizational knowledge"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upload Form Card */}
        <Card variant="glass" padding="lg">
          <CardHeader>
            <div>
              <CardTitle>Email Files</CardTitle>
              <CardDescription>
                Select a folder
              </CardDescription>
            </div>
          </CardHeader>

          <div className="space-y-6">
            <FileSelect
              onFolderSelected={setFolderPath}
              disabled={isUploading}
            />

            {files.length > 0 && (
              <>
                <FileList files={files} onRemove={removeFile} />

                <div className="flex gap-3">
                  <Button
                    onClick={processFiles}
                    isLoading={isUploading}
                    disabled={pendingCount === 0}
                    className="flex-1"
                    rightIcon={
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    }
                  >
                    Send to Backend
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={clearFiles}
                    disabled={isUploading}
                  >
                    Clear All
                  </Button>
                </div>
              </>
            )}

            {/* Result Display */}
            {result && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="font-medium">Success</span>
                </div>
                <p className="text-sm text-emerald-300/80 mt-1">{result}</p>
              </div>
            )}

            {/* Error Display */}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span className="font-medium">Error</span>
                </div>
                <p className="text-sm text-red-300/80 mt-1">{error}</p>
              </div>
            )}
          </div>
        </Card>

        {/* Parsed Emails Card */}
        <Card variant="glass" padding="lg">
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <CardTitle>Parsed Emails</CardTitle>
              {parsedEmails.length > 0 && (
                <Badge variant="success">{parsedEmails.length} emails</Badge>
              )}
            </div>
          </CardHeader>

          {isLoadingEmails ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="lg" />
            </div>
          ) : emailsError ? (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-sm text-red-400">{emailsError}</p>
            </div>
          ) : parsedEmails.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <p className="text-sm text-slate-400">No emails processed yet</p>
              <p className="text-xs text-slate-500 mt-1">Upload a folder to get started</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {parsedEmails.map((email, index) => (
                <EmailCard key={index} email={email} />
              ))}
            </div>
          )}
        </Card>
      </div>
    </DashboardContent>
  );
}

// Knowledge Page - Display extracted knowledge
function KnowledgePage() {
  return (
    <DashboardContent>
      <PageHeader
        title="Knowledge Base"
        description="Browse and search extracted knowledge from your emails"
      />

      <Card variant="glass" padding="lg">
        <NoDataEmptyState />
      </Card>
    </DashboardContent>
  );
}

// Export Page - Export data
function ExportPage() {
  return (
    <DashboardContent>
      <PageHeader
        title="Export Data"
        description="Download your extracted knowledge in various formats"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ExportCard
          title="CSV Export"
          description="Export knowledge records as a spreadsheet-compatible CSV file"
          icon={<CSVIcon />}
          format="CSV"
        />
        <ExportCard
          title="JSON Export"
          description="Export raw data in JSON format for integration with other tools"
          icon={<JSONIcon />}
          format="JSON"
        />
      </div>
    </DashboardContent>
  );
}

// Helper Components
function EmailCard({ email }: { email: BackendParsedEmail }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const content = email.message_content || "";
  const truncatedContent = content.length > 150
    ? content.substring(0, 150) + "..."
    : content;

  return (
    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-medium text-white truncate">{email.subject}</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            {email.date}
          </p>
        </div>
      </div>

      {/* Sender & Recipient */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mb-3">
        <div>
          <span className="text-slate-500">From: </span>
          <span className="text-slate-300">{email.sender_name || email.sender_email}</span>
        </div>
        <div>
          <span className="text-slate-500">To: </span>
          <span className="text-slate-300">{email.recipient_name || email.recipient_email}</span>
        </div>
      </div>

      {/* Content */}
      <div className="text-xs text-slate-400 whitespace-pre-wrap">
        {isExpanded ? content : truncatedContent}
      </div>

      {/* Expand/Collapse */}
      {content.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-indigo-400 hover:text-indigo-300 mt-2"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

function ExportCard({
  title,
  description,
  icon,
  format,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  format: string;
}) {
  return (
    <Card variant="glass" hover padding="lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-white mb-1">{title}</h3>
          <p className="text-sm text-slate-400 mb-4">{description}</p>
          <Button variant="secondary" size="sm">
            Export {format}
          </Button>
        </div>
      </div>
    </Card>
  );
}

function CSVIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

function JSONIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M8 13h2" />
      <path d="M8 17h2" />
      <path d="M14 13h2" />
      <path d="M14 17h2" />
    </svg>
  );
}
