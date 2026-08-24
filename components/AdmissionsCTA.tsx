import Reveal from "./Reveal";
import { contact } from "@/lib/content";

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#227755_0%,_#0E2A47_60%)] opacity-90" />
      <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
        <Reveal>
          <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-amber">
            Admissions Open
          </span>
          <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-white mt-4 leading-tight">
            Begin your career in physiotherapy at P.K. Das College.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Speak with our admission team or send in your application
            seats for the new academic year are open.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNZi8r2gbHvLu9wPG5GALbA4HN3PeTT5cK1WyEh1pHMDBeFw/viewform"
              className="bg-amber hover:bg-amber-dark transition rounded-full px-8 py-4 font-semibold text-[15px] text-white shadow-[0_14px_30px_-10px_rgba(232,150,60,.7)]"
            >
              Apply Now
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNZi8r2gbHvLu9wPG5GALbA4HN3PeTT5cK1WyEh1pHMDBeFw/viewform"
              className="border border-white/30 hover:border-green hover:text-green transition rounded-full px-8 py-4 font-semibold text-[15px] text-white"
            >
              Enquire Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
