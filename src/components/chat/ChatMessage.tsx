interface ChatMessageProps {
  type: "user" | "assistant";
  content: string;
  timestamp?: string;
  isLoading?: boolean;
}

export function ChatMessage({
  type,
  content,
  timestamp,
  isLoading,
}: ChatMessageProps) {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-indigo-600 text-white rounded-br-md"
            : "bg-white/[0.05] text-slate-200 border border-white/10 rounded-bl-md"
        }`}
      >
        {isLoading ? (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        ) : (
          <p className="text-sm whitespace-pre-wrap break-words">{content}</p>
        )}

        {timestamp && !isLoading && (
          <p
            className={`text-xs mt-1.5 ${
              isUser ? "text-indigo-200" : "text-slate-500"
            }`}
          >
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}
