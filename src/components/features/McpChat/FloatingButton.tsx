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
      className="fixed right-6 bottom-6 z-40 rounded-full bg-primary p-4 text-white"
    >
      {open ? <BiRedo size={iconSize} /> : <BiMessageRounded size={iconSize} />}
    </button>
  );
};
