import type { KnowledgeCategory } from "../../types";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | KnowledgeCategory;

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  warning: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  error: "bg-red-500/15 text-red-400 border-red-500/25",
  info: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  // Knowledge categories
  decision: "bg-purple-500/15 text-purple-400 border-purple-500/25",
  task: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  arrangement: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  key_info: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  risk: "bg-red-500/15 text-red-400 border-red-500/25",
  deadline: "bg-orange-500/15 text-orange-400 border-orange-500/25",
};

const dotColors: Record<BadgeVariant, string> = {
  default: "bg-slate-400",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  error: "bg-red-400",
  info: "bg-blue-400",
  decision: "bg-purple-400",
  task: "bg-blue-400",
  arrangement: "bg-emerald-400",
  key_info: "bg-amber-400",
  risk: "bg-red-400",
  deadline: "bg-orange-400",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-1 text-xs",
};

export function Badge({
  variant = "default",
  children,
  size = "md",
  dot = false,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-md border
        uppercase tracking-wide
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`}
        />
      )}
      {children}
    </span>
  );
}

// Convenience component for knowledge categories
export function CategoryBadge({
  category,
  size = "md",
}: {
  category: KnowledgeCategory;
  size?: "sm" | "md";
}) {
  const labels: Record<KnowledgeCategory, string> = {
    decision: "Decision",
    task: "Task",
    arrangement: "Arrangement",
    key_info: "Key Info",
    risk: "Risk",
    deadline: "Deadline",
  };

  return (
    <Badge variant={category} size={size} dot>
      {labels[category]}
    </Badge>
  );
}
