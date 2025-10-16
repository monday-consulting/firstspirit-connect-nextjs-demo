import { BiMessageRounded, BiRedo } from "react-icons/bi";

export type FloatingButtonProps = {
  open: boolean;
  toggleOpen: () => void;
};

export const FloatingButton = ({ open, toggleOpen }: FloatingButtonProps) => {
  const iconSize = 24;
  return (
    <button
      type="button"
      aria-label="Open chat"
      onClick={toggleOpen}
      className="fixed right-4 bottom-4 z-40 rounded-full bg-primary p-3 text-white shadow-lg sm:right-6 sm:bottom-6 sm:p-4"
    >
      {open ? <BiRedo size={iconSize} /> : <BiMessageRounded size={iconSize} />}
    </button>
  );
};
