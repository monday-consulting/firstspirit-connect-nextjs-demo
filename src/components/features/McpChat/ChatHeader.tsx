import { useTranslations } from "next-intl";
import { VscChromeClose, VscSettingsGear } from "react-icons/vsc";

export type ChatHeaderProps = {
  toggleDetails: () => void;
  toggleOpen: () => void;
};

export const ChatHeader = ({ toggleDetails, toggleOpen }: ChatHeaderProps) => {
  const t = useTranslations();

  return (
    <div className="flex items-center justify-between bg-primary p-4 text-white">
      <div className="font-bold">{t("chat.headline")}</div>
      <div className="flex items-center gap-2">
        <button type="button" title={"Technical details"} onClick={toggleDetails} className="p-1">
          <VscSettingsGear />
        </button>
        <button type="button" aria-label="Close" onClick={toggleOpen} className="p-1">
          <VscChromeClose />
        </button>
      </div>
    </div>
  );
};
