"use client";

import Image from "next/image";
import logo from "@/assets/smart_living_logo.webp";
import { Link } from "@/i18n/routing";
import { LuGlobe, LuMenu, LuX } from "react-icons/lu";
import { locales } from "@/i18n/config";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useFavorites } from "@/utils/hooks/useFavorites";
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
        <div className="hidden gap-8 lg:flex">
          {navStructure.structure.map((navItem) => (
            <div key={navItem.fsNavItemId} className="group relative">
              <Link href={navItem.seoRoute || "#"} className="hover:text-gray-400">
                {navItem.label}
              </Link>
              {navItem.children && navItem.children.length > 0 && (
                <div className="absolute left-0 z-40 hidden w-72 flex-col gap-4 rounded-xl bg-white p-8 shadow-lg group-hover:flex">
                  {navItem.children.map((item) => (
                    <div key={item.fsNavItemId} className="flex flex-col gap-2">
                      <Link
                        href={item.seoRoute || "#"}
                        className="font-bold text-textLighter uppercase hover:text-black hover:underline"
                      >
                        {item.label}
                      </Link>
                      <div className="flex translate-x-2 flex-col">
                        {item.children?.map((itemLvl2) => (
                          <Link
                            href={itemLvl2.seoRoute || "#"}
                            key={itemLvl2.fsNavItemId}
                            className="w-full rounded-md px-2 py-1 hover:bg-lightGray hover:underline"
                          >
                            {itemLvl2.label}
                          </Link>
                        ))}
                      </div>
                    </div>
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
          <div className="-right-2 absolute z-40 hidden w-96 flex-col gap-4 rounded-xl bg-white p-8 shadow-lg group-hover:flex">
            <h3 className="font-bold">{t("favorites.listTitle")}</h3>
            <div className="flex flex-col gap-2">
              {favorites.list && favorites.list.length > 0 ? (
                favorites.list.map((favorite) => (
                  <FavoriteTeaser
                    key={favorite.id}
                    title={favorite.title}
                    id={favorite.id}
                    image={favorite.image}
                  />
                ))
              ) : (
                <p>{t("favorites.listEmpty")}</p>
              )}
            </div>
          </div>
        </div>
        <div className="group">
          <LuGlobe size={20} className="cursor-pointer" />
          <div className="absolute right-6 z-40 hidden flex-col gap-2 rounded-xl bg-white p-8 shadow-lg group-hover:flex">
            <Link locale={locales[0]} href="/" className="hover:underline">
              Deutsch
            </Link>
            <Link locale={locales[1]} href="/" className="hover:underline">
              English
            </Link>
          </div>
        </div>
        <button type="button" className="flex lg:hidden" onClick={toggleMobileNav}>
          {mobileNavActive ? (
            <LuX size={20} className="z-50 cursor-pointer" />
          ) : (
            <LuMenu size={20} className="z-50 cursor-pointer" />
          )}
        </button>
      </div>
      {mobileNavActive && (
        <div className="absolute top-0 right-0 bottom-0 z-40 flex w-4/5 flex-col gap-8 bg-white px-10 py-[41.5px] shadow-lg">
          {navStructure.structure.map((navItem) => (
            <div key={navItem.fsNavItemId}>
              <div className="mb-1">
                <Link
                  href={navItem.seoRoute || "#"}
                  className="font-bold text-textLighter uppercase hover:text-black hover:underline"
                  onClick={toggleMobileNav}
                >
                  {navItem.label}
                </Link>
              </div>
              {navItem.children && (
                <div className="flex translate-x-4 flex-col gap-3">
                  {navItem.children.map((item) => (
                    <div key={item.fsNavItemId}>
                      <div className="mb-1">
                        <Link
                          href={item.seoRoute || "#"}
                          className="font-bold hover:underline"
                          onClick={toggleMobileNav}
                        >
                          {item.label}
                        </Link>
                      </div>
                      <div className="flex translate-x-4 flex-col">
                        {item.children?.map((itemLvl2) => (
                          <Link
                            href={itemLvl2.seoRoute || "#"}
                            key={itemLvl2.fsNavItemId}
                            className="hover:underline"
                            onClick={toggleMobileNav}
                          >
                            {itemLvl2.label}
                          </Link>
                        ))}
                      </div>
                    </div>
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
