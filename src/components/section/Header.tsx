import { useMemo } from "react";
import type { DataEntries } from "fsxa-api";
import { DevComponent } from "../Dev";
import { useDev } from "../composables/showDev";
import { useNextApp } from "../tests/testutils/nextMocks";

export type HeaderProps = {
  data: DataEntries;
};

const Header = ({ data }: HeaderProps) => {
  const { showDev } = useDev();
  const { $isPreviewMode } = useNextApp();
  const devStyle = "h-8 border-b";

  const opacity = useMemo(() => {
    const bgOpacity: string = data.pt_bgOpacity?.key ?? "";
    switch (bgOpacity) {
      case "20":
        return "bg-opacity-20";
      case "40":
        return "bg-opacity-40";
      case "60":
        return "bg-opacity-60";
      case "80":
        return "bg-opacity-80";
      default:
        return "";
    }
  }, [data]);

  return (
    <section
      className={`group relative ${!data.pt_image && showDev && $isPreviewMode ? devStyle : ""}`}
      data-testid="headerSection"
    >
      {data.pt_headline && (
        <div className="h-64">
          <div className="absolute inset-0 flex flex-col justify-center text-white">
            <div className="relative h-full w-full">
              {data.pt_image && (
                //TODO: ElementsImage hier ergänzen
                <img src={data.pt_image} alt="" className="absolute h-full w-full object-cover" />
              )}
              <div
                className={`relative h-full w-full p-6 md:p-12 ${opacity ? `bg-black ${opacity}` : ""}`}
              >
                <div className="container mx-auto px-4">
                  <h1 className="font-bold font-heading text-4xl text-white leading-none md:text-5xl">
                    {data.pt_headline}
                  </h1>
                  <p className="mt-12 font-heading text-white leading-tight sm:text-l md:text-xl">
                    {data.pt_subheadline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDev && $isPreviewMode && (
        <DevComponent currentDataMock={undefined} currentPageMock={undefined} content={data} />
      )}
    </section>
  );
};

export { Header };
