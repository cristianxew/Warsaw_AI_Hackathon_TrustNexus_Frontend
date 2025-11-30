import { Link } from "react-router-dom";
import logo from "../../assets/mail2knowledge.png";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Mail2Knowledge" className="h-10" />
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
