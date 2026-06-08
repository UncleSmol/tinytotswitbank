"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Send an enquiry",
    copy: "Call, WhatsApp, or visit the academy to ask about space, age groups, fees, and the best class fit for your child.",
  },
  {
    title: "Tour the academy",
    copy: "Meet the team, view the classrooms, ask about routines, and understand how your child will settle into the school day.",
  },
  {
    title: "Complete registration",
    copy: "Submit forms, parent details, emergency contacts, health notes, and required documents before your child starts.",
  },
  {
    title: "Start settling in",
    copy: "Teachers guide your child through the first days with warm routines, familiar activities, and parent communication.",
  },
];

const documents = [
  "Child birth certificate or identity document",
  "Parent or guardian identity document",
  "Emergency contact details",
  "Medical, allergy, or medication information",
  "Authorised pickup list",
  "Proof of payment or fee arrangement where required",
];

const ageGroups = [
  ["Toddlers", "Ages 2-3", "Gentle routines, sensory play, and first friendships"],
  ["Preschool", "Ages 3-5", "Early literacy, numeracy, creativity, and confidence"],
  ["Grade R readiness", "Ages 5-6", "Focused preparation for formal schooling"],
  ["Aftercare", "Afternoons", "Supervised rest, play, homework support, and pickup"],
];

const parentChecks = [
  "Confirm class availability before completing forms",
  "Share allergies, medical needs, and comfort routines early",
  "Keep phone and WhatsApp contacts updated",
  "Label clothing, bags, bottles, and personal items",
];

export default function AdmissionsPage() {
  return (
    <main className="bg-[#fffaf0] text-[#20312d]">
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,250,240,0.96), rgba(255,250,240,0.78), rgba(255,250,240,0.24)), url('https://i.pinimg.com/736x/70/e5/32/70e532964694bed1f9cc5e61d53e044d.jpg')",
        }}
      >
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Admissions
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-[#18332f] sm:text-6xl">
              A clear path from first enquiry to first school day.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5f746f]">
              We help parents understand availability, age groups, daily
              routines, fees, documents, and the settling-in process before
              registration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+27136564865"
                className="rounded-full bg-[#18332f] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#294a44]"
              >
                Call 013 656 4865
              </a>
              <a
                href="https://wa.me/27815004998"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2f9c95] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#23827b]"
              >
                WhatsApp 081 500 4998
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-lg border border-[#ead9b8] bg-white/90 p-6 shadow-xl backdrop-blur"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Quick details
            </p>
            <div className="mt-5 grid gap-4">
              {[
                ["Address", "1 Alexander St, eMalahleni, 1034"],
                ["Phone", "013 656 4865"],
                ["WhatsApp", "081 500 4998"],
                ["Opening", "Opens 7:00 am Monday"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-[#fffaf0] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                    {label}
                  </p>
                  <p className="mt-2 font-black text-[#18332f]">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            How admission works
          </p>
          <h2 className="mt-3 text-4xl font-black text-[#18332f]">
            Four simple steps for families joining the academy.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-lg border border-[#ead9b8] bg-white p-6 shadow-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#2f9c95] text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-[#18332f]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5f746f]">
                {step.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Age groups
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#18332f]">
              Find the right class fit for your child.
            </h2>
            <p className="mt-5 leading-7 text-[#5f746f]">
              Class placement depends on age, readiness, available space, and
              how each child settles into classroom routines.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ageGroups.map(([title, ages, copy]) => (
              <article
                key={title}
                className="rounded-lg border border-[#ead9b8] bg-[#fffaf0] p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                  {ages}
                </p>
                <h3 className="mt-2 text-xl font-black text-[#18332f]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5f746f]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div className="rounded-lg border border-[#ead9b8] bg-white p-7 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            Required documents
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#18332f]">
            Bring the basics for registration.
          </h2>
          <div className="mt-6 grid gap-3">
            {documents.map((item) => (
              <p
                key={item}
                className="rounded-lg bg-[#fffaf0] p-4 text-sm font-bold leading-6 text-[#38504b]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#ead9b8] bg-white p-7 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            Parent checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#18332f]">
            Prepare for a smoother first week.
          </h2>
          <div className="mt-6 grid gap-3">
            {parentChecks.map((item) => (
              <p
                key={item}
                className="rounded-lg bg-[#fffaf0] p-4 text-sm font-bold leading-6 text-[#38504b]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#18332f] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7c95f]">
              Fees and availability
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Ask the office for current fees and open spaces.
            </h2>
            <p className="mt-5 leading-7 text-white/75">
              Fees and space availability can change by age group and term.
              Contact the academy directly for the latest registration details,
              payment arrangements, and start-date options.
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-6">
            <p className="text-xl font-black">Ready to start?</p>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Book a visit, ask about class placement, or request the latest
              admissions information.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#f7c95f] px-6 py-3 text-sm font-black text-[#18332f] transition hover:bg-white"
            >
              Contact the academy
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
