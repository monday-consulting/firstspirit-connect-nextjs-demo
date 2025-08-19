import type { Message } from "./ChatConversation";

export type StartingMessage = {
  messages: Message[];
};
export const StartingMessage = ({ messages }: StartingMessage) => {
  if (messages.length > 0) return null;

  return (
    <div className="py-6 text-center text-gray-500">
      <div className="mb-2 text-5xl">🤖</div>
      <div>Start a conversation with MondAI</div>
    </div>
  );
};
