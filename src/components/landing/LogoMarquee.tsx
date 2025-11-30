import assecoLogo from "../../assets/asseco_logo.svg";
import warsawaiLogo from "../../assets/warsawai-logo.webp";
import mail2knowledgeLogo from "../../assets/mail2knowledge.png";

export function LogoMarquee() {
  return (
    <section className="py-12 border-y border-white/5 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm text-slate-500 font-medium">
          BUILT AT WARSAW AI HACKATHON
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8 opacity-60 transition-all duration-500 hover:opacity-100">
          <LogoSet />
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
      <img
        src={assecoLogo}
        alt="Asseco"
        className="h-6 w-auto"
      />
      <img
        src={warsawaiLogo}
        alt="Warsaw AI"
        className="h-8 w-auto"
      />
      <img
        src={mail2knowledgeLogo}
        alt="Mail2Knowledge"
        className="h-10 w-auto"
      />
    </>
  );
}
