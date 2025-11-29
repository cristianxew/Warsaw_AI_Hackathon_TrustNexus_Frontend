import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-900/10"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
          Stop wasting data.
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Start building your organizational brain today. Connect your first
          inbox in under 5 minutes.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
          />
          <button
            type="submit"
            className="bg-white text-slate-950 px-6 py-3.5 rounded-xl font-medium hover:bg-slate-200 transition-colors"
          >
            Get Started
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-500">
          No credit card required for the pilot program.
        </p>
      </div>
    </section>
  );
}
