import Image from "next/image";
import logo from "@/assets/smart_living_logo.webp";
import Link from "next/link";
import { LuGlobe, LuHeart } from "react-icons/lu";
import { locales } from "@/i18n";

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

const favorites: Favorite[] = [];

const Navigation = ({ navStructure }: NavigationProps) => {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-8">
        <Image src={logo} alt="Logo" className="mr-4" height={40} />
        {navStructure.structure.map((navItem) => (
          <Link key={navItem.fsNavItemId} href={navItem.seoRoute || "#"}>
            {navItem.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="group relative">
          <LuHeart size={20} className="cursor-pointer" />
          <div className="-right-2 absolute hidden w-72 flex-col gap-4 bg-white p-8 shadow-lg group-hover:flex">
            <h3 className="font-bold">Liste aller Favoriten</h3>
            <ul>
              {favorites.length > 0 ? (
                favorites.map((favorite) => <li key={favorite.title}>{favorite.title}</li>)
              ) : (
                <p>No favorites</p>
              )}
            </ul>
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
      </div>
    </div>
  );
};

export { Navigation };
