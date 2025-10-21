import { useTranslations } from "next-intl";
import { BiX } from "react-icons/bi";

export type ChatIndicatorProps = {
  onClose: () => void;
  onOpenChat: () => void;
};

export const ChatIndicator = ({ onClose, onOpenChat }: ChatIndicatorProps) => {
  const t = useTranslations("chat");

  const handleOpenChat = () => {
    onClose();
    onOpenChat();
  };

  return (
    <div className="fixed right-4 bottom-20 z-40 w-72 animate-fade-in rounded-lg bg-secondary p-4 text-white shadow-xl sm:right-6 sm:bottom-24">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close popup"
        className="absolute top-2 right-2"
      >
        <BiX size={20} />
      </button>

      <div className="pr-6">
        <p className="mb-3 text-s">{t("indicator.message")}</p>
        <button
          type="button"
          onClick={handleOpenChat}
          className="w-full rounded-md bg-white px-4 py-2 text-sm text-text transition-opacity hover:opacity-90"
        >
          {t("indicator.openChat")}
        </button>
      </div>
    </div>
  );
};
