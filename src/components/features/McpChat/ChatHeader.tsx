import { useTranslations } from "next-intl";
import { VscChromeClose, VscSettingsGear } from "react-icons/vsc";

export type ChatHeaderProps = {
  toggleDetails: () => void;
  toggleOpen: () => void;
};

export const ChatHeader = ({ toggleDetails, toggleOpen }: ChatHeaderProps) => {
  const t = useTranslations();

  return (
    <div className="flex items-center justify-between bg-primary px-3 py-3 text-white sm:px-4 sm:py-4">
      <div className="font-bold text-sm sm:text-base">{t("chat.headline")}</div>
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          type="button"
          title="Technical details"
          onClick={toggleDetails}
          className="rounded p-1.5 transition-colors hover:bg-white/10"
          aria-label="Toggle technical details"
        >
          <VscSettingsGear size={18} className="sm:h-4 sm:w-4" />
        </button>
        <button
          type="button"
          aria-label="Close"
          onClick={toggleOpen}
          className="rounded p-1.5 transition-colors hover:bg-white/10"
        >
          <VscChromeClose size={18} className="sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  );
};
