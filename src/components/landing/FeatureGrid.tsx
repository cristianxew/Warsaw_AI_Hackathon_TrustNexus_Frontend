export function FeatureGrid() {
  return (
    <section id="product" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
            What Mail2Knowledge Does
          </h2>
          <p className="text-slate-400 text-lg">
            Transform your email archives into searchable, summarized knowledge
            with AI-powered processing and secure storage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <EmailParsingFeature />
          <AISummarizationFeature />
          <SecureStorageFeature />
        </div>
      </div>
    </section>
  );
}

function EmailParsingFeature() {
  return (
    <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        Email Parsing
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        Parse Polish-format emails with full header extraction. Automatically
        identifies sender, recipient, subject, date, and message content.
      </p>

      <div className="mt-8 relative h-32 w-full rounded-lg bg-slate-950 border border-white/5 overflow-hidden p-4">
        <div className="font-mono text-xs text-slate-500 space-y-1">
          <div><span className="text-indigo-400">Od:</span> jan.kowalski@firma.pl</div>
          <div><span className="text-indigo-400">Do:</span> anna.nowak@firma.pl</div>
          <div><span className="text-indigo-400">Temat:</span> Projekt Q4</div>
          <div><span className="text-indigo-400">Wysłano:</span> 2024-01-15</div>
        </div>
      </div>
    </div>
  );
}

function AISummarizationFeature() {
  return (
    <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        AI Summarization
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        Llama 3.3 70B generates concise summaries for each email, extracting
        key decisions, action items, and important details automatically.
      </p>

      <div className="mt-8 relative h-32 w-full flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center animate-pulse">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-violet-400"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="absolute -right-8 top-0 text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
            Llama 3.3
          </div>
        </div>
      </div>
    </div>
  );
}

function SecureStorageFeature() {
  return (
    <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">Secure Storage</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        All emails are encrypted using Fernet symmetric encryption before
        storage in SQLite. Your data stays private and protected.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="px-3 py-1.5 rounded-md bg-slate-800 border border-emerald-500/30 text-xs text-emerald-400">
          Fernet Encryption
        </div>
        <div className="h-px w-4 bg-slate-600"></div>
        <div className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-xs text-slate-300">
          SQLite
        </div>
      </div>
    </div>
  );
}
