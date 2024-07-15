import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getNavigation } from "@/gql/navigation";
import Link from "next/link";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
  const navigationData = await getNavigation(locale);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider>
          <div>
            {navigationData.map((navItem) => (
              <Link key={navItem.id} href={navItem.pages.index}>
                {navItem.pages.index}
              </Link>
            ))}
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
