import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`
              w-full bg-white/5 border rounded-xl px-4 py-3 text-white
              placeholder-slate-500
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
              disabled:opacity-50 disabled:cursor-not-allowed
              ${leftIcon ? "pl-11" : ""}
              ${rightIcon ? "pr-11" : ""}
              ${error ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10 hover:border-white/20"}
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        {hint && !error && (
          <p className="mt-2 text-sm text-slate-500">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Search input variant
export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <Input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      leftIcon={<SearchIcon />}
      rightIcon={
        value ? (
          <button
            onClick={() => onChange("")}
            className="hover:text-white transition-colors"
          >
            <ClearIcon />
          </button>
        ) : null
      }
    />
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
