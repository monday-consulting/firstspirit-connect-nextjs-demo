import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { Footer } from "@/components/layouts/Footer";
import { Navigation, type NavigationStructure } from "@/components/layouts/Navigation/Navigation";
import { getFooter } from "@/gql/documents/gcaPage";
import { getNavigationStructure } from "@/gql/documents/navigation";
import type { LinkData } from "@/types";
import { stripNavigationFiles } from "@/utils/links";
import type { Locale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ClientProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netlify Connect Demo | Next.js",
  description:
    "Demo project that shows the usage of Netlify Connect with FirstSpirit integration in a Next.js project",
};

export const revalidate = 300; // Revalidate content every 5 minute

const RootLayout = async (
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
  }>
) => {
  const { children } = props;
  const { locale } = await props.params;

  const messages = await getMessages();
  const structure = await getNavigationStructure(locale);
  const footer = await getFooter(locale);

  const footerLinks = footer.gcLinks
    ?.map((link) => {
      if (link?.data.__typename === "FirstSpiritInternalLink") {
        return {
          label: link.data.ltText,
          href:
            link.data.ltLink?.__typename === "FirstSpiritPageRef"
              ? link.data.ltLink.page?.route
              : "/",
        };
      }
    })
    .filter((link) => link !== undefined) as LinkData[];

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

            <Footer copyrightText={{ content: footer?.gcCopyright }} legalLinks={footerLinks} />
          </ClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
