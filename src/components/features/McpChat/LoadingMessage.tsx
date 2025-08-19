export type LoadingMessageProps = {
  loading: boolean;
};

export const LoadingMessage = ({ loading }: LoadingMessageProps) => {
  if (!loading) return null;

  return (
    <div className="flex justify-start">
      <div className="rounded-lg bg-gray-100 p-2 text-gray-800">
        <div className="flex items-center gap-2">
          <div className="animate-pulse">Claude is thinking…</div>
          <div className="flex space-x-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500" />
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
              style={{
                animationDelay: "0.1s",
              }}
            />
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
              style={{
                animationDelay: "0.2s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
