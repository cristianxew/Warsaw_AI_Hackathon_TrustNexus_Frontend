export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Location */}
          <p className="text-sm text-slate-500">Warsaw, Poland</p>

          {/* Copyright */}
          <p className="text-xs text-slate-600">
            © 2025 Mail2Knowledge - Warsaw AI Hackathon
          </p>
        </div>
      </div>
    </footer>
  );
}
