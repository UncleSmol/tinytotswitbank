import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/tiny-tots-logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9b8] bg-[#fffaf0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-black text-[#18332f]"
        >
          <Image
            src={logo}
            alt="Tiny Tots Witbank Academy logo"
            width={80}
            height={80}
            className="h-14 w-14 rounded-full object-contain lg:h-20 lg:w-20"
            priority
          />
          <span>Witbank Tiny Tots Academy</span>
        </Link>
        <nav className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-[#38504b] transition hover:bg-[#f7c95f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
