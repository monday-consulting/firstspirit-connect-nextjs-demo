import { SuggestedQuestions } from "./SuggestedQuestions";

export type InputMessageProps = {
  input: string;
  setInput: (value: string) => void;
  sendMessage: (text?: string) => void | Promise<void>;
  loading: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
};

export const InputMessage = ({
  input,
  setInput,
  sendMessage,
  loading,
  onKeyDown,
}: InputMessageProps) => {
  return (
    <div className="flex flex-col gap-2 border-t p-3">
      <SuggestedQuestions
        onSend={(text) => {
          setInput(text);
          void sendMessage(text);
        }}
      />
      <div className="flex">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type your message…"
          disabled={loading}
          rows={2}
          className="flex-1 resize-none rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          className="rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};
