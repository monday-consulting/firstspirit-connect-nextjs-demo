"use client";
import Image from "next/image";
import logo from "@/assets/smart_living_logo.webp";
import { Link } from "@/components/composables/navigation";
import { LuGlobe, LuMenu, LuX } from "react-icons/lu";
import { locales } from "@/i18n";
import { useTranslations } from "next-intl";
import { useState } from "react";
import useFavorites from "@/utils/hooks/useFavorites";
import { FavoriteTeaser } from "../elements/FavoriteTeaser";
import { VscHeart } from "react-icons/vsc";

export type NavigationRoute = {
  fsNavItemId: string;
  label: string;
  seoRoute?: string;
  children?: NavigationRoute[];
};

export type NavigationStructure = {
  structure: NavigationRoute[];
};

export type NavigationProps = {
  navStructure: NavigationStructure;
};

export type Favorite = {
  title: string;
  href: string;
};

const Navigation = ({ navStructure }: NavigationProps) => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [favorites] = useFavorites();
  const t = useTranslations();

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image src={logo} alt="Logo" className="mr-4" height={40} />
        </Link>
        <div className="hidden gap-8 md:flex">
          {navStructure.structure.map((navItem) => (
            <div key={navItem.fsNavItemId} className="group relative">
              <Link href={navItem.seoRoute || "#"} className="hover:text-gray-400">
                {navItem.label}
              </Link>
              {navItem.children && navItem.children.length > 0 && (
                <div className="absolute left-0 hidden w-72 flex-col gap-4 bg-white p-8 shadow-lg group-hover:flex">
                  {navItem.children.map((item) => (
                    <Link
                      href={item.seoRoute || "#"}
                      key={item.fsNavItemId}
                      className="hover:underline"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6">
        <div className="group relative">
          <VscHeart size={20} className="cursor-pointer" />
          <div className="-right-2 absolute hidden w-96 flex-col gap-4 bg-white p-8 shadow-lg group-hover:flex">
            <h3 className="font-bold">{t("i18n.favListTitle")}</h3>
            <div className="flex flex-col gap-2">
              {favorites.list && favorites.list.length > 0 ? (
                favorites.list.map((favorite) => (
                  <FavoriteTeaser key={favorite.id} title={favorite.title} image={favorite.image} />
                ))
              ) : (
                <p>{t("i18n.favListEmpty")}</p>
              )}
            </div>
          </div>
        </div>
        <div className="group">
          <LuGlobe size={20} className="cursor-pointer" />
          <div className="absolute right-6 hidden flex-col gap-2 bg-white p-8 shadow-lg group-hover:flex">
            <Link locale={locales[0]} href="/" className="hover:underline">
              Deutsch
            </Link>
            <Link locale={locales[1]} href="/" className="hover:underline">
              English
            </Link>
          </div>
        </div>
        <button type="button" className="flex md:hidden" onClick={toggleMobileNav}>
          {mobileNavActive ? (
            <LuX size={20} className="z-10 cursor-pointer" />
          ) : (
            <LuMenu size={20} className="z-10 cursor-pointer" />
          )}
        </button>
      </div>
      {mobileNavActive && (
        <div className="absolute top-0 right-0 bottom-0 flex w-4/5 flex-col gap-8 bg-white px-10 py-[41.5px] shadow-lg">
          {navStructure.structure.map((navItem) => (
            <div key={navItem.fsNavItemId}>
              <Link
                href={navItem.seoRoute || "#"}
                className="font-bold text-gray-400 uppercase hover:text-black"
              >
                {navItem.label}
              </Link>
              {navItem.children && (
                <div className="flex flex-col gap-2">
                  {navItem.children.map((item) => (
                    <Link
                      href={item.seoRoute || "#"}
                      key={item.fsNavItemId}
                      className="hover:underline"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export { Navigation };
