import { useTranslations } from "next-intl";
import { VscRobot } from "react-icons/vsc";

export const StartingMessage = () => {
  const t = useTranslations();

  return (
    <div className="my-12 flex flex-col items-center gap-4 text-center">
      <VscRobot size={30} />
      <div>{t("chat.startingMessage")}</div>
    </div>
  );
};
