import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-900/10"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
          Ready to explore your emails?
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Upload your email folder and let AI generate summaries for each message.
          Ask questions and discover insights from your communications.
        </p>

        <Link
          to="/dashboard"
          className="inline-flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-medium hover:bg-slate-200 transition-colors text-lg"
        >
          Try the Dashboard
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        <p className="mt-6 text-xs text-slate-500">
          Built at Warsaw AI Hackathon 2024
        </p>
      </div>
    </section>
  );
}
