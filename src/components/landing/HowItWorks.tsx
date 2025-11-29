import { useState } from "react";

const tabs = [
  {
    title: "Ingest & Listen",
    description:
      "Connect via API or forwarding rule. We process attachments and thread history.",
  },
  {
    title: "Extract & Categorize",
    description:
      "AI models parse intent, urgency, and extract specific entities based on your schema.",
  },
  {
    title: "Database Sync",
    description:
      "Formatted data is pushed to your PostgreSQL, Mongo, or Vector store instantly.",
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
            <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-ping opacity-20"></div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="solar-icon"
            >
              <path
                className="solar-duotone-secondary"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                fill="currentColor"
              />
              <path
                className="solar-duotone-primary"
                d="M12 7V13L16 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-white font-medium">Listening to Port 25...</p>
          <div className="flex justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:100ms]"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:200ms]"></span>
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
            <span className="text-emerald-400">●</span> Processing Entities
          </div>
          <div className="bg-slate-950/50 p-3 rounded border border-white/5">
            <span className="text-purple-400">Entity:</span> Project_Deadline
            <br />
            <span className="text-slate-500">Value:</span> "Oct 24th"
            <br />
            <span className="text-emerald-500">Confidence: 98%</span>
          </div>
          <div className="bg-slate-950/50 p-3 rounded border border-white/5">
            <span className="text-purple-400">Entity:</span> Budget_Cap
            <br />
            <span className="text-slate-500">Value:</span> 15000 USD
            <br />
            <span className="text-emerald-500">Confidence: 99%</span>
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
        <div className="bg-slate-900 px-4 py-2 text-xs text-slate-400 border-b border-white/5">
          database_v1.sql
        </div>
        <div className="p-4 space-y-2">
          <div className="h-2 bg-slate-800 rounded w-full"></div>
          <div className="h-2 bg-slate-800 rounded w-5/6"></div>
          <div className="h-2 bg-green-500/20 rounded w-2/3"></div>
          <div className="h-2 bg-slate-800 rounded w-4/5"></div>
        </div>
        <div className="px-4 py-3 bg-green-500/10 text-green-400 text-xs flex items-center gap-2 border-t border-green-500/20">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12L10 17L20 7"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Sync Complete
        </div>
      </div>
    </div>
  );
}
