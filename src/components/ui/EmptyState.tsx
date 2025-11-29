interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center py-16 px-6 text-center
        ${className}
      `}
    >
      {icon && (
        <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-500 mb-6">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-slate-400 max-w-sm mb-6">{description}</p>
      )}
      {action}
    </div>
  );
}

// Pre-built empty states for common scenarios
export function NoDataEmptyState({ onAction }: { onAction?: () => void }) {
  return (
    <EmptyState
      icon={<InboxIcon />}
      title="No data yet"
      description="Upload some emails to get started extracting knowledge"
      action={
        onAction && (
          <button
            onClick={onAction}
            className="px-4 py-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Upload emails
          </button>
        )
      }
    />
  );
}

export function NoResultsEmptyState({ query }: { query?: string }) {
  return (
    <EmptyState
      icon={<SearchIcon />}
      title="No results found"
      description={
        query
          ? `No items match "${query}". Try adjusting your search or filters.`
          : "Try adjusting your search or filters."
      }
    />
  );
}

export function ErrorEmptyState({
  onRetry,
}: {
  onRetry?: () => void;
}) {
  return (
    <EmptyState
      icon={<AlertIcon />}
      title="Something went wrong"
      description="We couldn't load the data. Please try again."
      action={
        onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors"
          >
            Try again
          </button>
        )
      }
    />
  );
}

// Icons
function InboxIcon() {
  return (
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function SearchIcon() {
  return (
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function AlertIcon() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
