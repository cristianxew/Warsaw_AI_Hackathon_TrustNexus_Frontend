import { useState } from "react";

const tabs = [
  {
    title: "Upload",
    description:
      "Point to your email folder on the server. We process all emails in the directory.",
  },
  {
    title: "Process",
    description:
      "AI generates concise summaries for each email, extracting key information automatically.",
  },
  {
    title: "Explore",
    description:
      "View summaries in the dashboard and ask questions about your email content.",
  },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="integration"
      className="py-24 bg-slate-900/20 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              How Mail2Knowledge Works
            </h2>

            <div className="space-y-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeTab === index
                      ? "bg-white/5 border border-white/10"
                      : "hover:bg-white/5 border border-transparent hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm ${
                        activeTab === index
                          ? "bg-indigo-500/20 text-indigo-400"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h4
                        className={`font-medium ${
                          activeTab === index ? "text-white" : "text-slate-200"
                        }`}
                      >
                        {tab.title}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[400px] w-full">
            <TabVisual index={0} isActive={activeTab === 0} />
            <TabVisual index={1} isActive={activeTab === 1} />
            <TabVisual index={2} isActive={activeTab === 2} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TabVisual({ index, isActive }: { index: number; isActive: boolean }) {
  const baseClasses =
    "absolute inset-0 transition-opacity duration-500 glass-card rounded-2xl p-6";
  const activeClasses = isActive
    ? "opacity-100"
    : "opacity-0 pointer-events-none";

  if (index === 0) {
    return (
      <div
        className={`${baseClasses} ${activeClasses} flex items-center justify-center`}
      >
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/10 text-indigo-400 mb-2 relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="text-white font-medium">Select Email Folder</p>
          <div className="text-sm text-slate-400 font-mono bg-slate-950 px-4 py-2 rounded-lg border border-white/5">
            /data/emails/
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={`${baseClasses} ${activeClasses}`}>
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-4">
            <span className="text-emerald-400">●</span> Generating Summaries...
          </div>
          <div className="bg-slate-950/50 p-3 rounded border border-white/5">
            <span className="text-purple-400">Email 1:</span> Projekt Q4
            <br />
            <span className="text-slate-500">Summary:</span> Meeting scheduled for Tuesday...
            <br />
            <span className="text-emerald-500">Status: Complete</span>
          </div>
          <div className="bg-slate-950/50 p-3 rounded border border-white/5">
            <span className="text-purple-400">Email 2:</span> Budget Approval
            <br />
            <span className="text-slate-500">Summary:</span> Budget of 45,000 PLN approved...
            <br />
            <span className="text-emerald-500">Status: Complete</span>
          </div>
          <div className="bg-slate-950/50 p-3 rounded border border-indigo-500/30 animate-pulse">
            <span className="text-purple-400">Email 3:</span> Team Update
            <br />
            <span className="text-indigo-400">Processing...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${activeClasses} flex items-center justify-center`}
    >
      <div className="w-full max-w-sm bg-slate-950 rounded-lg border border-white/10 overflow-hidden">
        <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 border-b border-white/5 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Ask about your emails...
        </div>
        <div className="p-4 space-y-3">
          <div className="bg-indigo-500/10 text-indigo-300 text-xs p-3 rounded-lg border border-indigo-500/20">
            What decisions were made in Q4 meetings?
          </div>
          <div className="bg-slate-800/50 text-slate-300 text-xs p-3 rounded-lg">
            Based on your emails, the key Q4 decisions include: budget approval of 45,000 PLN, project timeline confirmation...
          </div>
        </div>
        <div className="px-4 py-3 bg-emerald-500/10 text-emerald-400 text-xs flex items-center gap-2 border-t border-emerald-500/20">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12L10 17L20 7"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Powered by Llama 3.3 70B
        </div>
      </div>
    </div>
  );
}
