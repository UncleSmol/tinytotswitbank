"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import gentleCareImage from "@/assets/gentle-care-section.png";
import logo from "@/assets/tiny-tots-logo.png";

const programmes = [
  "Early literacy",
  "Creative play",
  "Outdoor learning",
  "School readiness",
];

const dailyRhythm = [
  { time: "07:00", activity: "Warm welcome and free play" },
  { time: "09:00", activity: "Morning ring and learning stations" },
  { time: "11:30", activity: "Lunch, stories, and quiet rest" },
  { time: "14:00", activity: "Art, music, movement, and pickup" },
];

const highlights = [
  {
    label: "Meet our staff team",
    value: "6",
    detail: "experienced team members",
    href: "/about",
  },
  {
    label: "Top 10 monthly learners",
    value: "10",
    detail: "learners celebrated monthly",
    href: "/programmes",
  },
  {
    label: "Learning programmes",
    value: "4",
    detail: "age-appropriate pathways",
    href: "/programmes",
  },
];

const reasons = [
  {
    title: "Child-centered routines",
    copy: "Children know what to expect each day, which helps them settle quickly and participate with confidence.",
  },
  {
    title: "Foundational skills",
    copy: "Class activities support language, counting, fine motor development, listening, and independence.",
  },
  {
    title: "Warm communication",
    copy: "Parents receive practical updates about routines, progress, events, and classroom needs.",
  },
];

const environments = [
  {
    title: "Classroom discovery",
    copy: "Purposeful learning corners for stories, puzzles, construction, counting, art, and pretend play.",
    image:
      "https://i.pinimg.com/1200x/ae/4d/91/ae4d91b875483b84089faf9690eb3f5d.jpg",
    details:
      "Classroom discovery gives children structured time with books, puzzles, blocks, counting tools, matching games, and pretend-play corners. Teachers guide small groups so learners can practise listening, vocabulary, early maths, problem solving, sharing, and independent task completion.",
    parentNote:
      "Parents can expect steady progress in attention span, language confidence, fine motor control, and school-readiness habits.",
  },
  {
    title: "Outdoor confidence",
    copy: "Movement, fresh air, gross motor play, and supervised games form part of the weekly routine.",
    image:
      "https://i.pinimg.com/736x/72/b0/10/72b010f2540c06cf3e1d360bf772f8a7.jpg",
    details:
      "Outdoor confidence supports balance, coordination, teamwork, taking turns, and safe risk-taking. Learners enjoy teacher-supervised games, running, climbing, ball play, group movement, and free-play moments that build strength and social skills.",
    parentNote:
      "Parents can expect children to grow in body awareness, confidence, cooperation, and healthy daily movement.",
  },
  {
    title: "Creative expression",
    copy: "Art, music, rhythm, storytelling, and imaginative activities help children express what they learn.",
    image:
      "https://i.pinimg.com/736x/74/f0/07/74f00713ac52037540d27ffae651bf6b.jpg",
    details:
      "Creative expression helps children communicate ideas through art, music, stories, role play, colour, rhythm, and movement. These activities strengthen imagination, emotional expression, vocabulary, hand control, and confidence in front of peers.",
    parentNote:
      "Parents can expect artwork, songs, storytelling moments, and creative projects that reflect each child's growing personality.",
  },
];

const facilities = [
  "Secure entry and supervised pickup",
  "Age-appropriate classroom spaces",
  "Rest time and care routines",
  "Outdoor play and movement areas",
  "Daily learning activities",
  "Aftercare support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [selectedSpace, setSelectedSpace] = useState<
    (typeof environments)[number] | null
  >(null);

  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#20312d]">
      <section
        className="relative overflow-hidden border-b border-[#ead9b8] bg-[#f7c95f] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,250,240,0.94) 0%, rgba(255,250,240,0.82) 44%, rgba(255,250,240,0.22) 100%), url('https://i.pinimg.com/1200x/f0/33/c9/f033c9d85f6d50be3377ac1c9b83de4c.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#18332f]/10" />

        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-5 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#47615b] shadow-sm">
              Preschool and foundation learning in Witbank
            </p>
            <h1 className="text-5xl font-black leading-[1.02] text-[#18332f] sm:text-6xl lg:text-7xl">
              Witbank Tiny Tots Academy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#38504b] sm:text-xl">
              A warm early-learning space where children build confidence,
              curiosity, friendships, and the skills they need for big school.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+27136564865"
                className="rounded-full bg-[#18332f] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#294a44]"
              >
                Call 013 656 4865
              </a>
              <a
                href="https://wa.me/27815004998"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2f9c95] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#23827b]"
              >
                WhatsApp 081 500 4998
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1%20Alexander%20St%2C%20eMalahleni%2C%201034"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-[#18332f] bg-white/60 px-6 py-3 text-sm font-bold text-[#18332f] transition hover:bg-white"
              >
                Get directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-[#2f9c95] shadow-2xl sm:rounded-[32px]" />
            <div className="absolute inset-3 grid place-items-center rounded-xl bg-[#fffaf0] p-3 sm:inset-5 sm:rounded-[28px] sm:p-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-full w-full place-items-center overflow-hidden rounded-xl border-2 border-dashed border-[#ee6f57] bg-white p-3 sm:rounded-[24px] sm:border-4 sm:p-4"
              >
                <div className="min-w-0 text-center">
                  <div className="mx-auto mb-3 grid h-20 w-20 place-items-center rounded-full bg-white p-2 shadow-md min-[380px]:h-24 min-[380px]:w-24 sm:mb-6 sm:h-40 sm:w-40">
                    <Image
                      src={logo}
                      alt="Tiny Tots Witbank Academy logo"
                      width={160}
                      height={160}
                      className="h-full w-full object-contain"
                      priority
                    />
                  </div>
                  <p className="text-xl font-black leading-tight text-[#18332f] min-[380px]:text-2xl">
                    Learn. Play. Grow.
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#69827c] sm:mt-3 sm:text-sm sm:tracking-[0.2em]">
                    Ages 2-6
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:px-8 md:pb-44 lg:px-10 xl:pb-52">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-5 md:grid-cols-4"
        >
          {programmes.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="rounded-lg border border-[#ead9b8] bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-extrabold text-[#18332f]">{item}</p>
              <p className="mt-3 text-sm leading-6 text-[#5f746f]">
                Practical, joyful activities designed for confident young
                learners.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section
        className="relative overflow-hidden bg-cover bg-center [clip-path:inset(-220px_0_0_0)] md:[clip-path:inset(-340px_0_0_0)]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(24,51,47,0.92), rgba(24,51,47,0.64)), url('https://cdn.pixabay.com/photo/2016/11/14/04/45/children-1822471_1280.jpg')",
        }}
      >
        <Image
          src={gentleCareImage}
          alt="Teacher surrounded by smiling learners"
          className="pointer-events-none absolute right-[-210px] top-1/2 z-0 hidden h-[420px] w-auto -translate-y-1/2 object-contain opacity-95 drop-shadow-2xl sm:block sm:right-[-220px] md:bottom-[-96px] md:right-[-20%] md:top-auto md:h-[620px] md:translate-y-0 lg:h-[720px] xl:h-[820px]"
          priority={false}
        />
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-8 px-6 py-16 text-white sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7c95f]">
              Why families choose us
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Gentle care, purposeful learning, and confident school readiness.
            </h2>
          </div>

          <div className="relative z-10 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <motion.article
                key={reason.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-lg border border-white/20 bg-white/12 p-5 backdrop-blur"
              >
                <h3 className="text-xl font-black">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  {reason.copy}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-lg border border-[#ead9b8] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="bg-[#18332f] p-7 text-white sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
                Academy highlights
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Meet the team and celebrate learner progress.
              </h2>
              <p className="mt-5 text-sm leading-6 text-white/75">
                A quick view of the people, programmes, and learner recognition
                that shape daily life at Witbank Tiny Tots Academy.
              </p>
            </div>

            <div className="grid gap-4 bg-[#fffaf0] p-5 sm:grid-cols-3 sm:p-6">
              {highlights.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group rounded-lg border border-[#ead9b8] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#f7c95f] hover:shadow-md"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f7c95f] text-xl font-black text-[#18332f] transition group-hover:bg-[#2f9c95] group-hover:text-white">
                    {item.value}
                  </span>
                  <p className="mt-5 text-lg font-black leading-6 text-[#18332f]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#5f746f]">
                    {item.detail}
                  </p>
                  <p className="mt-5 text-sm font-black text-[#ee6f57]">
                    View details
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            Learning spaces
          </p>
          <h2 className="mt-3 text-4xl font-black text-[#18332f]">
            Different spaces for different kinds of growth.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {environments.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedSpace(item)}
              className="group relative min-h-[360px] overflow-hidden rounded-lg border border-[#ead9b8] bg-cover bg-center text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(24,51,47,0.08), rgba(24,51,47,0.88)), url('${item.image}')`,
              }}
            >
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/82">
                  {item.copy}
                </p>
                <p className="mt-5 text-sm font-black text-[#f7c95f]">
                  Learn more
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              A balanced day
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#18332f]">
              Calm structure with room for imagination.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5f746f]">
              The academy day gives children reliable routines, active play,
              early academics, rest, meals, and teacher-guided discovery.
            </p>
          </div>

          <div className="grid gap-4">
            {dailyRhythm.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="flex items-center gap-5 rounded-lg border border-[#ead9b8] bg-[#fffaf0] p-5"
              >
                <span className="min-w-16 rounded-full bg-[#2f9c95] px-3 py-2 text-center text-sm font-black text-white">
                  {item.time}
                </span>
                <p className="font-semibold text-[#38504b]">{item.activity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,250,240,0.96), rgba(255,250,240,0.76), rgba(255,250,240,0.28)), url('https://cdn.pixabay.com/photo/2019/06/24/07/37/child-4296594_1280.jpg')",
        }}
      >
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Parent partnership
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#18332f]">
              Clear communication from the first visit to daily pickup.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#5f746f]">
              Families are guided through settling in, classroom routines,
              events, progress moments, and practical reminders throughout the
              term.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Settling-in guidance", "Progress conversations", "Event reminders", "Routine updates"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#ead9b8] bg-white/90 p-5 font-black text-[#18332f] shadow-sm"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            Facilities and care
          </p>
          <h2 className="mt-3 text-4xl font-black text-[#18332f]">
            Practical details that support a smooth school day.
          </h2>
          <p className="mt-5 leading-7 text-[#5f746f]">
            The academy environment is structured for safety, routine,
            classroom participation, rest, movement, and teacher-guided
            learning.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {facilities.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#ead9b8] bg-white p-5 text-sm font-black text-[#18332f] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(24,51,47,0.92), rgba(24,51,47,0.76)), url('https://cdn.pixabay.com/photo/2016/03/27/22/22/children-1284338_1280.jpg')",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 text-white sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7c95f]">
              Admissions
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight">
              Visit the academy and see the learning day for yourself.
            </h2>
            <p className="mt-5 leading-7 text-white/80">
              Contact the office to ask about availability, class placement,
              registration steps, and the best time to tour the school.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+27136564865"
                className="rounded-full bg-[#f7c95f] px-6 py-3 text-sm font-black text-[#18332f] transition hover:bg-white"
              >
                Call 013 656 4865
              </a>
              <a
                href="https://wa.me/27815004998"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2f9c95] px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#18332f]"
              >
                WhatsApp
              </a>
              <a
                href="/admissions"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#18332f]"
              >
                View admissions
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedSpace ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-[#18332f]/70 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="learning-space-title"
          onClick={() => setSelectedSpace(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="min-h-[260px] bg-cover bg-center sm:min-h-[340px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(24,51,47,0.04), rgba(24,51,47,0.82)), url('${selectedSpace.image}')`,
              }}
            />
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
                  Learning space
                </p>
                <h2
                  id="learning-space-title"
                  className="mt-3 text-3xl font-black text-[#18332f]"
                >
                  {selectedSpace.title}
                </h2>
                <p className="mt-5 leading-7 text-[#5f746f]">
                  {selectedSpace.details}
                </p>
              </div>
              <div className="rounded-lg bg-[#fffaf0] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                  Parent takeaway
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#38504b]">
                  {selectedSpace.parentNote}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedSpace(null)}
                  className="mt-6 rounded-full bg-[#18332f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#294a44]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </main>
  );
}
