export function FeatureGrid() {
  return (
    <section id="product" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
            Built for the AI-Native Enterprise
          </h2>
          <p className="text-slate-400 text-lg">
            Your emails contain 80% of your company's operational context. We
            make it machine-readable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <SemanticExtractionFeature />
          <KnowledgeGraphingFeature />
          <SeamlessSyncFeature />
        </div>
      </div>
    </section>
  );
}

function SemanticExtractionFeature() {
  return (
    <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="solar-icon"
        >
          <path
            className="solar-duotone-secondary"
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            fill="currentColor"
          />
          <path
            className="solar-duotone-primary"
            d="M15.75 9H18.25C18.6642 9 19 8.66421 19 8.25C19 7.83579 18.6642 7.5 18.25 7.5H15.75V5C15.75 4.58579 15.4142 4.25 15 4.25C14.5858 4.25 14.25 4.58579 14.25 5V7.5H11.75C11.3358 7.5 11 7.83579 11 8.25C11 8.66421 11.3358 9 11.75 9H14.25V11.5C14.25 11.9142 14.5858 12.25 15 12.25C15.4142 12.25 15.75 11.9142 15.75 11.5V9Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        Semantic Extraction
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        Our LLM pipeline identifies entities, dates, costs, and commitments
        buried in threads. No more manual data entry.
      </p>

      <div className="mt-8 relative h-32 w-full rounded-lg bg-slate-950 border border-white/5 overflow-hidden">
        <div className="absolute top-4 left-4 right-4 space-y-2">
          <div className="h-2 bg-slate-800 rounded w-3/4"></div>
          <div className="h-2 bg-slate-800 rounded w-1/2"></div>
          <div className="flex gap-2 mt-4">
            <span className="h-6 w-16 bg-indigo-500/20 rounded border border-indigo-500/30"></span>
            <span className="h-6 w-12 bg-emerald-500/20 rounded border border-emerald-500/30"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeGraphingFeature() {
  return (
    <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="solar-icon"
        >
          <path
            className="solar-duotone-secondary"
            d="M11 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13Z"
            fill="currentColor"
          />
          <path
            className="solar-duotone-primary"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.5 12C8.5 13.3807 9.61929 14.5 11 14.5H15C16.3807 14.5 17.5 13.3807 17.5 12C17.5 10.6193 16.3807 9.5 15 9.5H11C9.61929 9.5 8.5 10.6193 8.5 12Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        Knowledge Graphing
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        Connect disparate emails into a cohesive organizational memory. Link
        projects to people, and decisions to outcomes.
      </p>

      <div className="mt-8 relative h-32 w-full flex items-center justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
          <div className="absolute top-0 left-0 w-2 h-2 bg-slate-600 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-slate-600 rounded-full animate-pulse [animation-delay:75ms]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-slate-600 rounded-full animate-pulse [animation-delay:150ms]"></div>
          <svg
            className="absolute inset-0 w-full h-full text-slate-800"
            stroke="currentColor"
            strokeWidth="1"
          >
            <line x1="12" y1="12" x2="50%" y2="50%" />
            <line x1="80" y1="12" x2="50%" y2="50%" />
            <line x1="80" y1="80" x2="50%" y2="50%" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SeamlessSyncFeature() {
  return (
    <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="solar-icon"
        >
          <path
            className="solar-duotone-secondary"
            d="M21 7C21 9.76142 16.9706 12 12 12C7.02944 12 3 9.76142 3 7C3 4.23858 7.02944 2 12 2C16.9706 2 21 4.23858 21 7Z"
            fill="currentColor"
          />
          <path
            className="solar-duotone-primary"
            d="M21 12C21 14.7614 16.9706 17 12 17C7.02944 17 3 14.7614 3 12V7C3 9.76142 7.02944 12 12 12C16.9706 12 21 9.76142 21 7V12Z"
            fill="currentColor"
          />
          <path
            className="solar-duotone-primary"
            d="M21 17C21 19.7614 16.9706 22 12 22C7.02944 22 3 19.7614 3 17V12C3 14.7614 7.02944 17 12 17C16.9706 17 21 14.7614 21 12V17Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">Seamless Sync</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        Push cleaned JSON objects directly to your Vector DB, CRM, or Project
        Management tools via webhooks.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-xs text-slate-300">
          Pinecone
        </div>
        <div className="h-px w-4 bg-slate-600"></div>
        <div className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-xs text-slate-300">
          Notion
        </div>
      </div>
    </div>
  );
}
