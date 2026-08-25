import Reveal from "./Reveal";
import { contact } from "@/lib/content";

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-[#008000]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#008000_0%,_#55b800_100%)] opacity-95" />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
        <Reveal>
          <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-emerald-200 font-semibold">
            Admissions Open
          </span>
          <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-white mt-4 leading-tight">
            Begin your career in physiotherapy at P.K. Das College.
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Speak with our admission team or send in your application
            seats for the new academic year are open.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNZi8r2gbHvLu9wPG5GALbA4HN3PeTT5cK1WyEh1pHMDBeFw/viewform"
              className="bg-blue-600 hover:bg-blue-700 transition rounded-full px-8 py-4 font-semibold text-[15px] text-white shadow-[0_14px_30px_-10px_rgba(37,99,235,0.7)]"
            >
              Apply Now
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNZi8r2gbHvLu9wPG5GALbA4HN3PeTT5cK1WyEh1pHMDBeFw/viewform"
              className="border border-white/60 hover:bg-white/10 transition rounded-full px-8 py-4 font-semibold text-[15px] text-white"
            >
              Enquire Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}