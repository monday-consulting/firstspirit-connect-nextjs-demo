import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { getNavigationStructure } from "@/gql/documents/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navigation, type NavigationStructure } from "@/components/app-layout/Navigation";
import { Footer } from "@/components/app-layout/Footer";
import { getFooter } from "@/gql/documents/gcaPage";
import { ClientProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netlify Connect Demo | Next.js",
  description:
    "Demo project that shows the usage of Netlify Connect with FirstSpirit integration in a Next.js project",
};

export const revalidate = 300; // Revalidate content every 5 minutes

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const messages = await getMessages();
  const structure = await getNavigationStructure(locale);
  const footer = await getFooter(locale).then((f) => JSON.parse(f?.data));

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
            <Footer
              copyrightText={{ content: footer.gc_copyright }}
              // biome-ignore lint/suspicious/noExplicitAny: No type definitions
              legalLinks={footer.gc_links.map((item: any) => ({
                label: item.data.lt_text,
                href: "#",
              }))}
            />
          </ClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
