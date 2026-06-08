"use client";

import { motion } from "framer-motion";

const gallery = [
  "Classroom corners",
  "Outdoor play",
  "Creative art",
  "Story time",
  "Music and movement",
  "Celebration days",
];

export default function GalleryPage() {
  return (
    <main className="bg-[#fffaf0] text-[#20312d]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl text-5xl font-black text-[#18332f]"
        >
          A bright look at everyday academy life.
        </motion.h1>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.06 }}
              className="grid aspect-[4/3] place-items-center rounded-lg border border-[#ead9b8] bg-white p-6 text-center shadow-sm"
            >
              <div>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#f7c95f]" />
                <p className="text-xl font-black text-[#18332f]">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
