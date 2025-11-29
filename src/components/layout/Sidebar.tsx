import { NavLink, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Upload",
    href: "/dashboard",
    icon: <UploadIcon />,
  },
  {
    name: "Knowledge",
    href: "/dashboard/knowledge",
    icon: <KnowledgeIcon />,
  },
  {
    name: "Export",
    href: "/dashboard/export",
    icon: <ExportIcon />,
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 border-r border-white/5 flex flex-col z-40">
      {/* Logo */}
      <div className="h-16 px-6 flex items-center gap-3 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="solar-icon"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
              className="opacity-40"
              fill="currentColor"
            />
            <path
              d="M15.5 13.5L12 11.5V7C12 6.45 11.55 6 11 6C10.45 6 10 6.45 10 7V12.16C10 12.59 10.21 13 10.57 13.24L14.63 15.86C15.08 16.15 15.68 16.03 15.98 15.57C16.27 15.11 16.15 14.51 15.69 14.21L15.5 13.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="font-semibold text-white tracking-tight">
          Mail2Knowledge
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? location.pathname === "/dashboard"
                : location.pathname.startsWith(item.href);

            return (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-indigo-500/10 text-indigo-400 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.2)]"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <span
                    className={`${isActive ? "text-indigo-400" : "text-slate-500"}`}
                  >
                    {item.icon}
                  </span>
                  {item.name}
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-white/5">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </NavLink>
      </div>
    </aside>
  );
}

// Icons
function UploadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function KnowledgeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
