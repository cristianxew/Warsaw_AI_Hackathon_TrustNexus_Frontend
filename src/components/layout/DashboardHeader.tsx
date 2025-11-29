interface DashboardHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function DashboardHeader({
  title,
  description,
  action,
}: DashboardHeaderProps) {
  return (
    <header className="h-16 px-8 flex items-center justify-between border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30">
      <div>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        {description && (
          <p className="text-sm text-slate-500">{description}</p>
        )}
      </div>
      {action && <div className="flex items-center gap-3">{action}</div>}
    </header>
  );
}

// Page header with breadcrumbs
export function PageHeader({
  title,
  description,
  action,
  breadcrumbs,
}: DashboardHeaderProps & {
  breadcrumbs?: Array<{ label: string; href?: string }>;
}) {
  return (
    <div className="mb-8">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-3">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-30"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-slate-400">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-slate-400 mt-1 max-w-2xl">{description}</p>
          )}
        </div>
        {action && <div className="flex items-center gap-3">{action}</div>}
      </div>
    </div>
  );
}
