import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="solar-icon"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                className="solar-duotone-secondary"
              />
              <path
                d="M15.5 13.5L12 11.5V7C12 6.45 11.55 6 11 6C10.45 6 10 6.45 10 7V12.16C10 12.59 10.21 13 10.57 13.24L14.63 15.86C15.08 16.15 15.68 16.03 15.98 15.57C16.27 15.11 16.15 14.51 15.69 14.21L15.5 13.5Z"
                className="solar-duotone-primary"
              />
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">
            Mail2Knowledge
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#product" className="hover:text-white transition-colors">
            Product
          </a>
          <a href="#integration" className="hover:text-white transition-colors">
            How it Works
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]"
          >
            Open Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
