import { Bot, User } from "lucide-react";

interface ChatBubbleProps {
  role: "user" | "assistant";
  message: string;
}

export function ChatBubble({ role, message }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
          isUser
            ? "bg-emerald-500 text-white"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message bubble */}
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
          isUser
            ? "rounded-tr-sm bg-emerald-500 text-white"
            : "rounded-tl-sm bg-muted text-foreground"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

// A demo wrapper so people can see it in action
export function ChatBubbleDemo() {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <ChatBubble role="user" message="Explain React in one line." />
      <ChatBubble
        role="assistant"
        message="React is a JavaScript library for building user interfaces using reusable components."
      />
      <ChatBubble role="user" message="Nice, thanks!" />
    </div>
  );
}