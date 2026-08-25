import collegeImage from "../public/college_pic.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-navy">
      {/* Soft background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(47,158,110,0.08)_0%,_rgba(255,255,255,0)_45%)]" />

      <div className="absolute -left-24 -bottom-24 w-[420px] h-[420px] rounded-full bg-green/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-[1fr_0.95fr] gap-12 lg:gap-16 items-center">
        {/* Hero Content */}
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.2em] uppercase text-green bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Ottapalam · Palakkad · Kerala
          </div>

          <h1 className="font-display text-[38px] leading-[1.08] sm:text-[46px] md:text-[56px] font-semibold tracking-[-0.01em] text-navy">
            The best Physiotherapy course in{" "}
            <span className="italic text-emerald-800">Palakkad</span> starts with
            how you&apos;re measured.
          </h1>

          <p className="mt-6 text-[16.5px] md:text-[18px] text-navy/65 max-w-xl leading-relaxed">
            P.K. Das College of Physiotherapy, Vaniyamkulam, offers a
            KUHS affiliated programme built on real clinical exposure from
            musculoskeletal care to sports injury and neuro-rehabilitation.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            {/* Apply Now */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNZi8r2gbHvLu9wPG5GALbA4HN3PeTT5cK1WyEh1pHMDBeFw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white transition rounded-full px-7 py-3.5 font-semibold text-[15px] shadow-[0_14px_30px_-10px_rgba(37,99,235,.5)]"
            >
              Apply Now
            </a>

            {/* Enquire Now */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNZi8r2gbHvLu9wPG5GALbA4HN3PeTT5cK1WyEh1pHMDBeFw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navy/25 text-navy hover:border-green hover:text-green transition rounded-full px-7 py-3.5 font-semibold text-[15px]"
            >
              Enquire Now
            </a>
          </div>

          {/* Trust / Information */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-navy/50 text-[13px] font-mono uppercase tracking-wide">
            <span>Affiliated · KUHS</span>

            <span className="w-1 h-1 rounded-full bg-navy/20 hidden sm:inline-block" />

            <span>Superspeciality Hospital Access</span>
          </div>
        </div>

        {/* College Image */}
        <div
          className="relative w-full animate-fadeUp"
          style={{ animationDelay: ".15s" }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_25px_70px_-25px_rgba(15,42,71,0.25)]">
            <Image
              src={collegeImage}
              alt="P.K. Das College of Physiotherapy"
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Image overlay accent */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy/20 via-transparent to-transparent" />

            {/* Bottom information badge */}
            <div className="absolute left-5 right-5 bottom-5 md:left-6 md:right-6 md:bottom-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green" />

                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-navy/70">
                  P.K. Das College of Physiotherapy
                </span>
              </div>
            </div>
          </div>

          {/* Decorative accent */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full border border-green/20 pointer-events-none" />

          <div className="absolute -right-2 -bottom-2 w-2.5 h-2.5 rounded-full bg-amber" />
        </div>
      </div>

      <div className="tick-rule" />
    </section>
  );
}