import Image from "next/image";
import logo from "@/assets/tiny-tots-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#ead9b8] bg-[#18332f] text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1.2fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Tiny Tots Witbank Academy logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full bg-white object-contain"
            />
            <p className="text-lg font-black">Witbank Tiny Tots Academy</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/75">
            Preschool care, play-based learning, and school readiness in
            Witbank.
          </p>
        </div>
        <div>
          <p className="font-bold">Hours</p>
          <p className="mt-3 text-sm text-white/75">Monday to Friday</p>
          <p className="text-sm text-white/75">Opens 7:00 am Monday</p>
        </div>
        <div>
          <p className="font-bold">Admissions</p>
          <p className="mt-3 text-sm text-white/75">013 656 4865</p>
          <a
            href="https://wa.me/27815004998"
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex text-sm font-bold text-[#f7c95f] hover:text-white"
          >
            WhatsApp 081 500 4998
          </a>
          <p className="text-sm text-white/75">
            1 Alexander St, eMalahleni, 1034
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-white/15 bg-white/10 md:col-span-2 lg:col-span-1">
          <iframe
            title="Witbank Tiny Tots Academy map"
            src="https://www.google.com/maps?q=1%20Alexander%20St%2C%20eMalahleni%2C%201034&output=embed"
            className="h-48 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 py-5 text-sm text-white/70 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>
          Copyright © {new Date().getFullYear()} Witbank Tiny Tots Academy. All
          rights reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="/policies" className="font-bold text-[#f7c95f] hover:text-white">
            Policies
          </a>
          <a href="/contact" className="font-bold text-[#f7c95f] hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
