export type ChatHeaderProps = {
  toggleDetails: () => void;
  toggleOpen: () => void;
};

export const ChatHeader = ({ toggleDetails, toggleOpen }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b px-3 py-2">
      <div className="font-medium text-gray-800">MCP Chat</div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          title={"Technical details"}
          onClick={toggleDetails}
          className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          🛠️
        </button>
        <button
          type="button"
          aria-label="Close"
          onClick={toggleOpen}
          className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
