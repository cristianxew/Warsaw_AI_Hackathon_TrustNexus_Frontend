export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600"></div>
              <span className="font-semibold tracking-tight">
                Mail2Knowledge
              </span>
            </div>
            <p className="text-sm text-slate-500">San Francisco, CA</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Extraction Engine
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © 2024 Mail2Knowledge Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons */}
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M14.5 9C14.5 9 14 10.5 13 11C12 11.5 10.5 10 9 13C8.5 14 9.5 15.5 9.5 15.5" />
              </svg>
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 17.5V19C21 20.1046 20.1046 21 19 21H17M21 17.5V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17.5M21 17.5L16.5 13M3 17.5V19C3 20.1046 3.89543 21 5 21H7M3 17.5L7.5 13M10 21H14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
