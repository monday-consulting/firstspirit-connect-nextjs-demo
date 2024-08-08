import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { getNavigationStructure } from "@/gql/documents/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navigation, type NavigationStructure } from "@/components/app-layout/Navigation";
import { FavoriteListProvider } from "@/utils/contexts/favorites";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netlify Connect Demo | Next.js",
  description:
    "Demo project that shows the usage of Netlify Connect with FirstSpirit integration in a Next.js project",
};

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const messages = await getMessages();
  const structure = await getNavigationStructure(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <FavoriteListProvider>
          <NextIntlClientProvider messages={messages}>
            <Navigation
              navStructure={
                {
                  structure: structure?.map((layerA) => ({
                    fsNavItemId: layerA?.navigationItem.fsNavItemId,
                    label: layerA?.navigationItem.label,
                    seoRoute: layerA?.navigationItem.seoRoute,
                    children: layerA?.structureChildren.map((layerB) => ({
                      fsNavItemId: layerB?.navigationItem.fsNavItemId,
                      label: layerB?.navigationItem.label,
                      seoRoute: layerB?.navigationItem.seoRoute,
                      children: layerB?.structureChildren.map((layerC) => ({
                        fsNavItemId: layerC?.navigationItem.fsNavItemId,
                        label: layerC?.navigationItem.label,
                        seoRoute: layerC?.navigationItem.seoRoute,
                      })),
                    })),
                  })),
                } as NavigationStructure
              }
            />
            {children}
          </NextIntlClientProvider>
        </FavoriteListProvider>
      </body>
    </html>
  );
};

export default RootLayout;
