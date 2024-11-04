import { Link } from "@/i18n/routing";
import logo from "@/assets/smart_living_logo.webp";
import Image from "next/image";
import { RichTextElement, type RichTextElementProps } from "../globals/RichTextElement";
import type { LinkData } from "@/types";

export type FooterProps = {
  copyrightText: RichTextElementProps;
  legalLinks: LinkData[];
};

const Footer = ({ copyrightText, legalLinks }: FooterProps) => {
  return (
    <div className="w-full border-gray border-t pt-12 text-sm text-text">
      <div className="flex flex-col items-center gap-6 p-4">
        <Link href="/" className="mb-4">
          <Image src={logo} alt="Logo" height={40} />
        </Link>
        <div className="flex gap-8 md:text-right" data-testid="legal-links">
          {legalLinks.map((link) => (
            <Link className="hover:underline" key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:text-center">
          <RichTextElement {...copyrightText} />
        </div>
      </div>
    </div>
  );
};
export { Footer };
