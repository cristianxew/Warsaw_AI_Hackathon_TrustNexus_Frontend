interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export function Spinner({ size = "md", className = "" }: SpinnerProps) {
  return (
    <div className={`relative ${sizeStyles[size]} ${className}`}>
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-white/10" />
      {/* Spinning arc */}
      <div
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 animate-spin"
        style={{ animationDuration: "0.8s" }}
      />
      {/* Inner glow */}
      <div className="absolute inset-1 rounded-full bg-indigo-500/10 animate-pulse" />
    </div>
  );
}

// Full-page loading spinner
export function LoadingScreen({ message }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="relative">
        {/* Ambient glow */}
        <div className="absolute -inset-8 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />
        <Spinner size="lg" />
      </div>
      {message && (
        <p className="mt-6 text-slate-400 text-sm animate-pulse">{message}</p>
      )}
    </div>
  );
}

// Inline loading indicator with text
export function LoadingIndicator({
  text = "Loading...",
}: {
  text?: string;
}) {
  return (
    <div className="flex items-center gap-3 text-slate-400">
      <Spinner size="sm" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
