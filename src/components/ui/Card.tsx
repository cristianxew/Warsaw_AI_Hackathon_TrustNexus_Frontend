import { forwardRef, type HTMLAttributes } from "react";

type CardVariant = "default" | "glass" | "elevated" | "outline";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles: Record<CardVariant, string> = {
  default: `
    bg-slate-900/60 border border-white/5
  `,
  glass: `
    bg-slate-900/40 backdrop-blur-xl
    border border-white/[0.08]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
  `,
  elevated: `
    bg-slate-900/80 backdrop-blur-sm
    border border-white/5
    shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]
  `,
  outline: `
    bg-transparent
    border border-white/10
  `,
};

const paddingStyles: Record<string, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      hover = false,
      padding = "md",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          rounded-2xl transition-all duration-300
          ${variantStyles[variant]}
          ${paddingStyles[padding]}
          ${hover ? "hover:border-white/15 hover:bg-slate-900/70" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Card subcomponents
export function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-lg font-semibold text-white ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm text-slate-400 ${className}`}>{children}</p>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 mt-6 pt-4 border-t border-white/5 ${className}`}
    >
      {children}
    </div>
  );
}
