export function LogoMarquee() {
  return (
    <section className="py-12 border-y border-white/5 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm text-slate-500 font-medium">
          TRUSTED BY FORWARD-THINKING DATA TEAMS
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
}

function LogoSet() {
  return (
    <>
      <svg
        className="h-8 w-auto text-white"
        viewBox="0 0 100 30"
        fill="currentColor"
      >
        <path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z" />
      </svg>
      <svg
        className="h-7 w-auto text-white"
        viewBox="0 0 100 30"
        fill="currentColor"
      >
        <circle cx="15" cy="15" r="10" />
        <rect x="35" y="5" width="20" height="20" />
        <path d="M70,25 L80,5 L90,25" />
      </svg>
      <svg
        className="h-8 w-auto text-white"
        viewBox="0 0 100 30"
        fill="currentColor"
      >
        <path d="M10,5 H30 V10 H15 V12 H25 V17 H15 V25 H10 Z M40,5 L50,25 L60,5 M70,5 H90 V10 H80 V25 H75 V10 H70 Z" />
      </svg>
      <svg
        className="h-6 w-auto text-white"
        viewBox="0 0 100 30"
        fill="currentColor"
      >
        <rect x="5" y="5" width="20" height="20" rx="5" />
        <rect x="35" y="5" width="20" height="20" rx="5" />
        <rect x="65" y="5" width="20" height="20" rx="5" />
      </svg>
    </>
  );
}
