export function BackgroundAmbience() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full opacity-50 mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-violet-600/10 blur-[100px] rounded-full opacity-30"></div>
      <div
        className="absolute inset-0 opacity-20 brightness-100 contrast-150"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      ></div>
    </div>
  );
}
