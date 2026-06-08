"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-[#fffaf0] text-[#20312d]">
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-[#18332f]">
            Book a visit or ask about available space.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#5f746f]">
            Reach out to arrange a school tour, request fees, or ask about the
            best class placement for your child.
          </p>
        </motion.div>

        <div className="rounded-lg border border-[#ead9b8] bg-white p-8 shadow-sm">
          <div className="grid gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                Phone
              </p>
              <p className="mt-2 text-xl font-black text-[#18332f]">
                013 656 4865
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                WhatsApp
              </p>
              <a
                href="https://wa.me/27815004998"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-xl font-black text-[#18332f] transition hover:text-[#2f9c95]"
              >
                081 500 4998
              </a>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                Hours
              </p>
              <p className="mt-2 text-xl font-black text-[#18332f]">
                Opens 7:00 am Monday
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                Location
              </p>
              <p className="mt-2 text-xl font-black text-[#18332f]">
                1 Alexander St, eMalahleni, 1034
              </p>
              <p className="mt-2 text-sm font-semibold text-[#5f746f]">
                Plus code: 467F+8V eMalahleni
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-lg border border-[#ead9b8] bg-white shadow-sm">
          <div className="p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Find us
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#18332f]">
              Visit us at 1 Alexander St.
            </h2>
          </div>
          <iframe
            title="Witbank Tiny Tots Academy location map"
            src="https://www.google.com/maps?q=1%20Alexander%20St%2C%20eMalahleni%2C%201034&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
