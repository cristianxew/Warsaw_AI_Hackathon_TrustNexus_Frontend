import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-violet-600/10 blur-[80px] rounded-full opacity-20" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="ml-64 relative z-10">
        <div className="min-h-screen">{children}</div>
      </main>
    </div>
  );
}

// Content wrapper with consistent padding
export function DashboardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-8 py-8 ${className}`}>
      <div className="max-w-6xl">{children}</div>
    </div>
  );
}
