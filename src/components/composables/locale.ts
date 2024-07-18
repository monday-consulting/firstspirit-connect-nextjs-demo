import { useState, useCallback, useEffect } from "react";
import { getAvailableLocales } from "fsxa-api";
import { getLanguageNamesFromLocales } from "../../utils/misc";

type LocaleConfig = {
  defaultLocale: string;
};

export type LocaleType = {
  name: string | null;
  identifier: string;
};

const defaultLocaleConfig: LocaleConfig = {
  defaultLocale: "de_DE",
};

function useRuntimeConfig() {
  return {
    public: {
      defaultLocale: process.env.REACT_APP_DEFAULT_LOCALE || "en_GB",
      mode: process.env.REACT_APP_MODE || "preview",
    },
    private: {
      apiKey: process.env.FSXA_API_KEY,
      navigationService: process.env.FSXA_NAVIGATION_SERVICE_URL as string,
      projectId: process.env.FSXA_PROJECT_ID as string,
      caas: process.env.FSXA_CAAS_URL,
      tenantId: process.env.FSXA_TENANT_ID,
      contendMode: process.env.FSXA_CONTENT_MODE as string,
    },
  };
}

function useAppConfig() {
  return { defaultLocale: "en_GB" };
}

export function useLocale() {
  const runtimeConfig = useRuntimeConfig();
  const {
    public: { defaultLocale: runtimeConfigDefaultLocale },
  } = runtimeConfig;
  const { defaultLocale: appConfigDefaultLocale } = useAppConfig();

  const resolvedDefaultLocale =
    runtimeConfigDefaultLocale || appConfigDefaultLocale || defaultLocaleConfig.defaultLocale;

  const [config, setConfig] = useState<LocaleConfig>({
    defaultLocale: resolvedDefaultLocale,
  });
  const [activeLocale, setActiveLocaleState] = useState<string | undefined>(undefined);
  const [availableLocales, setAvailableLocalesState] = useState<LocaleType[]>([]);

  const setActiveLocale = useCallback((locale: string) => {
    setActiveLocaleState(locale);
  }, []);

  const setAvailableLocales = useCallback((identifiers: string[]) => {
    setAvailableLocalesState(getLanguageNamesFromLocales(identifiers));
  }, []);

  // TODO: check hook dependencies
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const fetchAvailableLocales = useCallback(async () => {
    if (typeof window === "undefined") {
      // simulation process.server check
      const availableLocales = await getAvailableLocales({
        navigationServiceURL: runtimeConfig.private.navigationService,
        projectId: runtimeConfig.private.projectId,
        contentMode: runtimeConfig.private.contendMode,
      });
      setAvailableLocales(availableLocales);
    }
  }, [runtimeConfig]);

  useEffect(() => {
    setConfig({ defaultLocale: resolvedDefaultLocale });
  }, [resolvedDefaultLocale]);

  return {
    config,
    setActiveLocale,
    activeLocale,
    availableLocales,
    setAvailableLocales,
    fetchAvailableLocales,
  };
}
