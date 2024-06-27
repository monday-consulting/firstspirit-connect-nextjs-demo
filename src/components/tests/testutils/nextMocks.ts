import { FetchByFilterParams, FetchElementParams } from "fsxa-api";
import toplevelDE from "../fixtures/toplevelNavigation_de_DE.json";
import toplevelEN from "../fixtures/toplevelNavigation_en_GB.json";
import page from "../fixtures/page.json";
export function useNextApp() {
    const fsxaApi = {
        fetchNavigation: ({ locale }: { locale: string }) =>
            locale === "de_DE" ? toplevelDE : toplevelEN,
        //   fetchProjectProperties: (_config: { locale: string }) => projectProperties,
        fetchElement: (_config: FetchElementParams) => page,
        fetchByFilter: (_config: FetchByFilterParams) => ({
            items: [],
        }),
        connectEventStream: () => ({
            close: () => null,
            addEventListener: (_event: string, _cb: (data: any) => void) =>
                null,
        }),
    };
    return {
        $createContentApi: () => fsxaApi,
        $isPreviewMode: true,
        $logger: () => null,
    };
}
