import type { Message } from "./ChatConversation";
import { StyledMessage } from "./StyledMessage";

export type MessageProps = {
  messages: Message[];
};

export const ChatResponse = ({ messages }: MessageProps) => {
  if (!messages?.length) return null;

  return (
    <>
      {messages.map((message) => {
        const isUser = message.role === "user";
        return (
          <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                isUser ? "bg-blue-500 text-white" : "bg-white text-gray-800"
              }`}
            >
              <div className="whitespace-pre-wrap">
                <StyledMessage content={message.content} />
              </div>
              {!!message.toolsUsed?.length && (
                <details className="mt-2 text-xs opacity-80">
                  <summary>🧰 {message.toolsUsed.length} tool(s)</summary>
                  <div className="mt-1 space-y-1">
                    {message.toolsUsed.map((tool, i) => (
                      <div key={i} className="font-mono">
                        <strong>{tool.name}</strong>
                      </div>
                    ))}
                  </div>
                </details>
              )}

              {!!message.resourcesUsed?.length && (
                <details className="mt-2 text-xs opacity-80">
                  <summary>📄 {message.resourcesUsed.length} resource(s)</summary>
                  <div className="mt-1 space-y-1">
                    {message.resourcesUsed.map((r, i) => (
                      <div key={i} className="font-mono">
                        <strong>{r.uri}</strong>
                      </div>
                    ))}
                  </div>
                </details>
              )}

              {!!message.promptsUsed?.length && (
                <details className="mt-2 text-xs opacity-80">
                  <summary>💬 {message.promptsUsed.length} prompt(s)</summary>
                  <div className="mt-1 space-y-1">
                    {message.promptsUsed.map((p, i) => (
                      <div key={i} className="font-mono">
                        <strong>{p.name}</strong>
                      </div>
                    ))}
                  </div>
                </details>
              )}

              <div className="mt-1 text-[11px] opacity-70">
                {message.timestamp instanceof Date
                  ? message.timestamp.toLocaleTimeString()
                  : new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
