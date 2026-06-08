"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import top10One from "@/assets/gallery/top-10.jpg";
import top10Two from "@/assets/gallery/top-10(2).jpg";
import top10Three from "@/assets/gallery/top-10(3).jpg";
import top10Four from "@/assets/gallery/top-10(4).jpg";
import top10Five from "@/assets/gallery/top-10(5).jpg";
import top10Six from "@/assets/gallery/top-10(6).jpg";
import top10Seven from "@/assets/gallery/top-10(7).jpg";
import top10Eight from "@/assets/gallery/top-10(8).jpg";
import top10Nine from "@/assets/gallery/top-10(9).jpg";
import top10Ten from "@/assets/gallery/top-10(10).jpg";

const topTenImages = [
  top10One,
  top10Two,
  top10Three,
  top10Four,
  top10Five,
  top10Six,
  top10Seven,
  top10Eight,
  top10Nine,
  top10Ten,
];

const monthlyGalleries: Record<string, StaticImageData[]> = {
  "June 2026": topTenImages,
  "May 2026": [...topTenImages].slice(2).concat(topTenImages.slice(0, 2)),
  "April 2026": [...topTenImages].slice(5).concat(topTenImages.slice(0, 5)),
};

const months = Object.keys(monthlyGalleries);

export function MonthlyLearners() {
  const [activeMonth, setActiveMonth] = useState(months[0]);
  const images = monthlyGalleries[activeMonth];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
              Monthly highlights
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#18332f] sm:text-4xl">
              Top 10 learners of the month
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {months.map((month) => (
              <button
                key={month}
                type="button"
                onClick={() => setActiveMonth(month)}
                className={`rounded-full px-4 py-2 text-sm font-black transition ${
                  activeMonth === month
                    ? "bg-[#18332f] text-white"
                    : "bg-[#fffaf0] text-[#38504b] hover:bg-[#f7c95f]"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#5f746f]">
          Browse the academy&apos;s learner recognition announcements by month.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.article
              key={`${activeMonth}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.025 }}
              className="overflow-hidden rounded-lg border border-[#ead9b8] bg-[#fffaf0] shadow-sm"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={image}
                  alt={`Top 10 learner announcement ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
