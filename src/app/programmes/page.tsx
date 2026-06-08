"use client";

import { motion } from "framer-motion";
import { MonthlyLearners } from "@/components/monthly-learners";

const programmes = [
  {
    title: "Toddlers",
    ages: "Ages 2-3",
    copy: "Gentle routines, sensory play, music, stories, movement, and first classroom habits.",
    outcomes: ["Settling in", "Language growth", "Sharing and turn-taking"],
  },
  {
    title: "Preschool",
    ages: "Ages 3-5",
    copy: "Early literacy, numeracy, creativity, confidence, friendships, and independent task completion.",
    outcomes: ["Early counting", "Story confidence", "Fine motor control"],
  },
  {
    title: "Grade R readiness",
    ages: "Ages 5-6",
    copy: "Structured activities that prepare learners for formal schooling, classroom rules, and focused work.",
    outcomes: ["Phonics awareness", "Number sense", "School readiness"],
  },
  {
    title: "Aftercare",
    ages: "Afternoons",
    copy: "Supervised rest, homework support, snacks, outdoor play, and a calm end to the school day.",
    outcomes: ["Safe pickup", "Homework support", "Afternoon routine"],
  },
];

const curriculum = [
  "Language, vocabulary, stories, listening, and early phonics",
  "Counting, sorting, matching, shapes, patterns, and problem solving",
  "Fine motor work through tracing, cutting, threading, drawing, and construction",
  "Music, movement, rhythm, creative art, and imaginative play",
  "Social skills including kindness, cooperation, sharing, and classroom responsibility",
  "Outdoor play for balance, coordination, confidence, and healthy movement",
];

const weeklyRhythm = [
  { day: "Monday", focus: "Settling in, weekend news, language, and classroom jobs" },
  { day: "Tuesday", focus: "Numbers, puzzles, construction, and fine motor work" },
  { day: "Wednesday", focus: "Stories, phonics awareness, art, and music" },
  { day: "Thursday", focus: "Outdoor movement, group games, and creative learning" },
  { day: "Friday", focus: "Revision, celebration, free play, and parent reminders" },
];

export default function ProgrammesPage() {
  return (
    <main className="bg-[#fffaf0] text-[#20312d]">
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,250,240,0.96), rgba(255,250,240,0.78), rgba(255,250,240,0.28)), url('https://i.pinimg.com/1200x/ae/4d/91/ae4d91b875483b84089faf9690eb3f5d.jpg')",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Programmes
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-[#18332f]">
              Learning programmes for every early milestone.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f746f]">
              Each programme is shaped around age, routine, play, confidence,
              social development, and school readiness.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {programmes.map((programme, index) => (
            <motion.article
              key={programme.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-lg border border-[#ead9b8] bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                {programme.ages}
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#18332f]">
                {programme.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5f746f]">{programme.copy}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {programme.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full bg-[#fffaf0] px-3 py-2 text-xs font-black text-[#38504b]"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Curriculum focus
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#18332f]">
              The day is built around practical early-learning skills.
            </h2>
            <p className="mt-5 leading-7 text-[#5f746f]">
              Learners move between teacher-guided activities, small group
              work, independent play, creative expression, outdoor movement,
              meals, rest, and classroom responsibilities.
            </p>
          </div>
          <div className="grid gap-3">
            {curriculum.map((item) => (
              <p
                key={item}
                className="rounded-lg border border-[#ead9b8] bg-[#fffaf0] p-4 text-sm font-bold leading-6 text-[#38504b]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            Weekly rhythm
          </p>
          <h2 className="mt-3 text-4xl font-black text-[#18332f]">
            A familiar weekly flow keeps children secure and engaged.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {weeklyRhythm.map((item) => (
            <article
              key={item.day}
              className="rounded-lg border border-[#ead9b8] bg-white p-5 shadow-sm"
            >
              <h3 className="text-xl font-black text-[#18332f]">{item.day}</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#5f746f]">
                {item.focus}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#18332f] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7c95f]">
              Parent expectations
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Clear routines help children succeed at school and at home.
            </h2>
            <p className="mt-5 leading-7 text-white/75">
              Parents are encouraged to keep contact details updated, share
              health or allergy information, support attendance routines, and
              speak to the academy when a child needs extra settling support.
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-6">
            <p className="text-xl font-black">Ready to ask about placement?</p>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Contact admissions to discuss your child&apos;s age group, space
              availability, and the best class fit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+27136564865"
                className="rounded-full bg-[#f7c95f] px-5 py-3 text-sm font-black text-[#18332f]"
              >
                Call 013 656 4865
              </a>
              <a
                href="https://wa.me/27815004998"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2f9c95] px-5 py-3 text-sm font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <MonthlyLearners />
    </main>
  );
}
