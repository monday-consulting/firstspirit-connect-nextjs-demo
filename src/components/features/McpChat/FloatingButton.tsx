import { BiMessageRounded, BiRedo } from "react-icons/bi";

export type FloatingButtonProps = {
  open: boolean;
  toggleOpen: () => void;
};

export const FloatingButton = ({ open, toggleOpen }: FloatingButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Open chat"
      onClick={toggleOpen}
      className="fixed right-6 bottom-6 z-40 rounded-full bg-blue-600 p-4 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      {open ? <BiRedo /> : <BiMessageRounded />}
    </button>
  );
};
