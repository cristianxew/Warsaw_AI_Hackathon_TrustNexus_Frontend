import { Link } from "react-router-dom";

export function Hero() {
  return (
    <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide uppercase animate-fade-slide-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            RAG-Ready Intelligence
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] animate-fade-slide-in-1">
            Turn your Email into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">
              operational knowledge
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-slide-in-2">
            Upload your email folders, get AI-powered summaries for each message,
            and ask questions about your communications. Secure encrypted storage
            keeps your data safe.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center animate-fade-slide-in-3">
            <Link
              to="/dashboard"
              className="group relative flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]"
            >
              Start Processing
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="solar-icon transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M19.75 11.7256L4.75 11.7256"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <DashboardPreview />
      </div>
    </main>
  );
}

function DashboardPreview() {
  return (
    <div className="mt-20 relative max-w-5xl mx-auto animate-fade-slide-in-4">
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-20"></div>
      <div className="relative rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            <div className="w-3 h-3 rounded-full bg-slate-600"></div>
          </div>
          <div className="ml-4 text-xs font-medium text-slate-500 flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="solar-icon"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <polyline
                points="22,6 12,13 2,6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Email Summaries Dashboard
          </div>
        </div>

        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5 h-[400px]">
          <div className="p-6 space-y-4 bg-slate-950/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Raw Email Input
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                Unstructured
              </span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-slate-400 leading-relaxed opacity-70">
              <p>From: sarah.j@client-corp.com</p>
              <p className="mb-4">Subject: Project Alpha Phase 2 Kickoff</p>
              <p>Hi Team,</p>
              <p>
                Following our call, we've decided to proceed with{" "}
                <span className="text-white bg-indigo-500/20 px-1 rounded">
                  Option B
                </span>
                . The budget is approved for{" "}
                <span className="text-white bg-emerald-500/20 px-1 rounded">
                  $45,000
                </span>
                .
              </p>
              <p className="mt-2">
                Please start the integration{" "}
                <span className="text-white bg-indigo-500/20 px-1 rounded">
                  by next Tuesday
                </span>
                . Mike will handle the API keys.
              </p>
            </div>
          </div>

          {/* Output Side */}
          <div className="p-6 space-y-4 bg-slate-900/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                Structured Knowledge Graph
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                JSON-LD / RAG Ready
              </span>
            </div>
            <div className="font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">
              <div className="token-dim">{"{"}</div>
              <div className="pl-4">
                <span className="token-key">"intent"</span>:{" "}
                <span className="token-string">"Project Approval"</span>,
              </div>
              <div className="pl-4">
                <span className="token-key">"decisions"</span>: [
              </div>
              <div className="pl-8">
                {"{"} <span className="token-key">"selected_option"</span>:{" "}
                <span className="token-string">"Option B"</span>,{" "}
                <span className="token-key">"status"</span>:{" "}
                <span className="token-string">"CONFIRMED"</span> {"}"}
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="token-key">"financials"</span>: {"{"}
              </div>
              <div className="pl-8">
                <span className="token-key">"amount"</span>:{" "}
                <span className="token-number">45000</span>,
              </div>
              <div className="pl-8">
                <span className="token-key">"currency"</span>:{" "}
                <span className="token-string">"USD"</span>
              </div>
              <div className="pl-4">{"}"},</div>
              <div className="pl-4">
                <span className="token-key">"action_items"</span>: [
              </div>
              <div className="pl-8">{"{"}</div>
              <div className="pl-12">
                <span className="token-key">"task"</span>:{" "}
                <span className="token-string">"Start Integration"</span>,
              </div>
              <div className="pl-12">
                <span className="token-key">"deadline"</span>:{" "}
                <span className="token-string">"2023-11-14"</span>,
              </div>
              <div className="pl-12">
                <span className="token-key">"assignee"</span>:{" "}
                <span className="token-string">"Mike"</span>
              </div>
              <div className="pl-8">{"}"}</div>
              <div className="pl-4">]</div>
              <div className="token-dim">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
