import Link from "next/link";

export const metadata = {
  title: "Page not found | Witbank Tiny Tots Academy",
  description:
    "The page you are looking for could not be found on the Witbank Tiny Tots Academy website.",
};

export default function NotFound() {
  return (
    <main className="bg-[#fffaf0] text-[#20312d]">
      <section className="relative overflow-hidden border-b border-[#ead9b8] bg-[#f7c95f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.65),transparent_32%),linear-gradient(135deg,rgba(47,156,149,0.18),rgba(238,111,87,0.16))]" />
        <div className="relative mx-auto grid min-h-[68vh] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-black text-[#47615b] shadow-sm">
              404
            </p>
            <h1 className="text-5xl font-black leading-[1.02] text-[#18332f] sm:text-6xl">
              Page not found
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#38504b]">
              The page may have moved, or the address may have been typed
              incorrectly. Use the links below to get back to the academy
              website.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full bg-[#18332f] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#294a44]"
              >
                Return home
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-[#2f9c95] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#23827b]"
              >
                Contact us
              </Link>
              <Link
                href="/admissions"
                className="rounded-full border-2 border-[#18332f] bg-white/60 px-6 py-3 text-sm font-black text-[#18332f] transition hover:bg-white"
              >
                Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
