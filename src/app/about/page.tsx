"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import teacherPlaceholder from "@/assets/teacher-image-placeholder.png";

const staffMembers = [
  {
    name: "Mrs. Lerato Mokoena",
    role: "Principal",
    focus: "Parent communication, school readiness, and daily operations",
    qualification: "Diploma in Early Childhood Development",
    experience: "12 years leading preschool and Grade R readiness teams",
    image: "https://cdn.pixabay.com/photo/2023/10/05/10/26/teacher-8295411_1280.jpg",
  },
  {
    name: "Teacher Nomsa Dlamini",
    role: "Toddler Class Lead",
    focus: "Sensory play, language development, and gentle routines",
    qualification: "NQF Level 4 Early Childhood Development",
    experience: "8 years supporting toddlers through first school routines",
    image: "https://cdn.pixabay.com/photo/2026/03/18/01/23/cyberco-kindergarten-teacher-10179442_1280.png",
  },
  {
    name: "Teacher Sarah van Wyk",
    role: "Preschool Teacher",
    focus: "Early literacy, numeracy, art, and classroom confidence",
    qualification: "Bachelor of Education Foundation Phase",
    experience: "7 years teaching early literacy and creative development",
    image: "https://cdn.pixabay.com/photo/2020/08/04/08/10/woman-5462074_1280.jpg",
  },
  {
    name: "Teacher Thandi Nkosi",
    role: "Grade R Readiness",
    focus: "Fine motor skills, phonics, counting, and independence",
    qualification: "Higher Certificate in Grade R Teaching",
    experience: "9 years preparing learners for formal schooling",
    image: "https://cdn.pixabay.com/photo/2025/10/04/12/52/woman-9872957_1280.jpg",
  },
  {
    name: "Mr. Kabelo Sithole",
    role: "Aftercare Coordinator",
    focus: "Afternoon supervision, homework support, and outdoor games",
    qualification: "Certificate in Child and Youth Care",
    experience: "6 years coordinating aftercare and learner activities",
    image: "https://cdn.pixabay.com/photo/2013/11/20/09/37/male-213729_1280.jpg",
  },
  {
    name: "Aunty Maria Jacobs",
    role: "Care Assistant",
    focus: "Meals, rest time support, hygiene, and classroom care",
    qualification: "First Aid and Childcare Support Certificate",
    experience: "10 years assisting with classroom care and daily routines",
    image: "https://cdn.pixabay.com/photo/2015/01/22/15/12/businessman-607831_640.png",
  },
];

const values = [
  {
    title: "Kindness",
    copy: "Children are guided to use gentle words, share space, and notice the feelings of others.",
  },
  {
    title: "Confidence",
    copy: "Small daily wins help learners speak up, try again, and take pride in their progress.",
  },
  {
    title: "Curiosity",
    copy: "Play, questions, stories, songs, and discovery activities make learning active and memorable.",
  },
  {
    title: "Readiness",
    copy: "Routines and classroom tasks prepare children for the structure of formal schooling.",
  },
];

const approach = [
  "Morning ring, calendar work, songs, and language development",
  "Fine motor activities including cutting, tracing, threading, and drawing",
  "Early numeracy through sorting, counting, patterns, shapes, and games",
  "Story time, phonics awareness, vocabulary building, and listening skills",
  "Creative art, music, movement, and imaginative play",
  "Outdoor play for balance, coordination, social skills, and confidence",
];

const careStandards = [
  "Supervised arrival and pickup routines",
  "Age-appropriate learning spaces and classroom expectations",
  "Hygiene support, rest routines, and daily care checks",
  "Teacher observation of social, emotional, and learning progress",
];

export default function AboutPage() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <main className="bg-[#fffaf0] text-[#20312d]">
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,250,240,0.94), rgba(255,250,240,0.78), rgba(255,250,240,0.26)), url('https://i.pinimg.com/736x/d8/ae/13/d8ae1308752a6ac32c7f1b23b3ce1ac0.jpg')",
        }}
      >
        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            About us
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-[#18332f]">
            A caring preschool built around confident beginnings.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="rounded-lg border border-[#ead9b8] bg-white p-8 shadow-sm"
        >
          <p className="text-lg leading-8 text-[#5f746f]">
            Tiny Tots Witbank Academy supports children through play,
            structure, language development, social skills, and age-appropriate
            learning. Our classrooms are warm, practical, and designed for
            children who are growing into independent young learners.
          </p>
        </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-16 sm:px-8 md:grid-cols-3 lg:px-10">
          {["Safe routines", "Small groups", "Parent updates"].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#ead9b8] bg-[#fffaf0] p-6"
            >
              <h2 className="text-xl font-black text-[#18332f]">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5f746f]">
                Clear expectations and consistent care help children settle,
                participate, and grow at a steady pace.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            School profile
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[#18332f]">
            A practical early-learning environment for Witbank families.
          </h2>
          <p className="mt-5 leading-7 text-[#5f746f]">
            Witbank Tiny Tots Academy serves young learners who need a safe,
            structured, and caring preschool setting. The academy focuses on
            steady routines, school readiness, confidence, social development,
            and daily learning through play.
          </p>
          <p className="mt-4 leading-7 text-[#5f746f]">
            Children are encouraged to participate at their own pace while
            teachers guide them through age-appropriate learning activities,
            classroom responsibilities, friendship skills, and independence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Ages supported", "Toddlers, preschool, and Grade R readiness"],
            ["Location", "1 Alexander St, eMalahleni, 1034"],
            ["Contact", "013 656 4865"],
            ["Opening", "Opens 7:00 am Monday"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-[#ead9b8] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ee6f57]">
                {label}
              </p>
              <p className="mt-3 text-lg font-black leading-7 text-[#18332f]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(24,51,47,0.92), rgba(24,51,47,0.68)), url('https://cdn.pixabay.com/photo/2016/11/14/04/45/children-1822471_1280.jpg')",
        }}
      >
        <div className="mx-auto grid min-h-[480px] max-w-7xl items-center gap-8 px-6 py-16 text-white sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7c95f]">
              Mission and values
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight">
              Helping children feel safe, capable, curious, and ready.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-white/20 bg-white/12 p-5 backdrop-blur"
              >
                <h3 className="text-xl font-black">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  {value.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            Learning approach
          </p>
          <h2 className="mt-3 text-4xl font-black text-[#18332f]">
            Play-based learning with clear teacher guidance.
          </h2>
          <p className="mt-5 leading-7 text-[#5f746f]">
            The academy balances structured activities with child-led play.
            Teachers use observation, repetition, encouragement, and practical
            classroom routines to support each learner&apos;s development.
          </p>
        </div>
        <div className="grid gap-3">
          {approach.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#ead9b8] bg-white p-4 text-sm font-bold leading-6 text-[#38504b] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div className="rounded-lg border border-[#ead9b8] bg-[#fffaf0] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Safety and care
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#18332f]">
              Reliable routines that protect the school day.
            </h2>
            <div className="mt-6 grid gap-3">
              {careStandards.map((item) => (
                <p
                  key={item}
                  className="rounded-lg bg-white p-4 text-sm font-bold leading-6 text-[#38504b]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#ead9b8] bg-[#fffaf0] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Parent partnership
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#18332f]">
              Families are kept close to classroom life.
            </h2>
            <p className="mt-5 leading-7 text-[#5f746f]">
              Parents can speak to the academy about settling in, class
              placement, school readiness, routines, and general progress.
              Clear communication helps children feel supported at school and
              at home.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#18332f] px-6 py-3 text-sm font-black text-white transition hover:bg-[#294a44]"
            >
              Contact the academy
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
            Our team
          </p>
          <h2 className="mt-3 text-4xl font-black text-[#18332f]">
            Experienced educators supporting every stage of early learning.
          </h2>
          <p className="mt-4 leading-7 text-[#5f746f]">
            Our team combines classroom experience, early childhood training,
            and patient daily care to help every child feel known and supported.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-auto gap-5 md:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-lg border border-[#ead9b8] shadow-sm transition-all duration-300 ${
                expandedMember === member.name
                  ? "h-[520px] md:col-span-2"
                  : "h-[360px] hover:h-[520px] focus-within:h-[520px]"
              }`}
            >
              <Image
                src={teacherPlaceholder}
                alt={`${member.name} temporary teacher profile placeholder`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18332f] via-[#18332f]/60 to-transparent" />

              <button
                type="button"
                aria-expanded={expandedMember === member.name}
                onClick={() =>
                  setExpandedMember((current) =>
                    current === member.name ? null : member.name,
                  )
                }
                className="absolute inset-0 text-left"
              >
                <span className="sr-only">
                  Toggle details for {member.name}
                </span>
              </button>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f7c95f]">
                  {member.role}
                </p>
                <h3 className="mt-2 text-2xl font-black leading-7">
                  {member.name}
                </h3>
                <div
                  className={`mt-4 grid gap-3 text-sm leading-6 text-white/85 transition-all duration-300 ${
                    expandedMember === member.name
                      ? "max-h-72 opacity-100"
                      : "max-h-0 opacity-0 group-hover:max-h-72 group-hover:opacity-100 group-focus-within:max-h-72 group-focus-within:opacity-100"
                  }`}
                >
                  <p>{member.focus}</p>
                  <div>
                    <p className="font-black text-white">Qualification</p>
                    <p>{member.qualification}</p>
                  </div>
                  <div>
                    <p className="font-black text-white">Experience</p>
                    <p>{member.experience}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
