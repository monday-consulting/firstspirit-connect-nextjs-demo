import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { getNavigationStructure } from "@/gql/documents/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navigation, type NavigationStructure } from "@/components/app-layout/Navigation";
// import { getFooter } from "@/gql/documents/gcaPage";
import { ClientProvider } from "./provider";
import type { Locale } from "@/i18n/config";
import { stripNavigationFiles } from "@/utils/links";
import { getFooter } from "@/gql/documents/gcaPage";
import { Footer } from "@/components/app-layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netlify Connect Demo | Next.js",
  description:
    "Demo project that shows the usage of Netlify Connect with FirstSpirit integration in a Next.js project",
};

export const revalidate = 300; // Revalidate content every 5 minutes

const RootLayout = async (
  props: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
  }>
) => {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  const messages = await getMessages();
  const structure = await getNavigationStructure(locale);
  const footer = await getFooter(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ClientProvider>
            <Navigation
              navStructure={
                {
                  structure: structure?.map((layerA) => ({
                    fsNavItemId: layerA?.navigationItem.fsNavItemId,
                    label: layerA?.navigationItem.label,
                    seoRoute: stripNavigationFiles(layerA?.navigationItem.seoRoute),
                    children: layerA?.structureChildren.map((layerB) => ({
                      fsNavItemId: layerB?.navigationItem.fsNavItemId,
                      label: layerB?.navigationItem.label,
                      seoRoute: stripNavigationFiles(layerB?.navigationItem.seoRoute),
                      children: layerB?.structureChildren.map((layerC) => ({
                        fsNavItemId: layerC?.navigationItem.fsNavItemId,
                        label: layerC?.navigationItem.label,
                        seoRoute: stripNavigationFiles(layerC?.navigationItem.seoRoute),
                      })),
                    })),
                  })),
                } as NavigationStructure
              }
            />
            {children}
            {footer?.data.__typename === "FirstSpiritGcaFooter" && (
              <Footer
                copyrightText={{ content: footer?.data.gcCopyright }}
                legalLinks={
                  footer.data.gcLinks
                    ? footer?.data.gcLinks.map((item) => ({
                        label: item?.name || "",
                        href: "#",
                      }))
                    : []
                }
              />
            )}
          </ClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
