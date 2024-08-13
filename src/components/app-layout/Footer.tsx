import Link from "next/link";
import logo from "@/assets/smart_living_logo.webp";
import Image from "next/image";

export type LegalLink = {
  label: string;
  href: string;
};

export type FooterProps = {
  copyrightText: string;
  legalLinks: LegalLink[];
};

const Footer = ({ copyrightText, legalLinks }: FooterProps) => {
  return (
    <div className="w-full border-t pt-12 text-sm text-text">
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
        <div className="md:text-center" data-testid="copyright">
          © {copyrightText}
        </div>
      </div>
    </div>
  );
};
export { Footer };
