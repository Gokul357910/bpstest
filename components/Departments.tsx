import Reveal from "./Reveal";
import { DeptIcon } from "./DeptIcons";
import { departments } from "@/lib/content";

export default function Departments() {
  return (
    <>
      <section id="departments" className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-green">
              Departments
            </span>
            <h2 className="font-display text-[30px] md:text-[38px] font-semibold text-navy mt-3">
              Nine labs. One clinical mindset.
            </h2>
            <p className="mt-4 text-navy/65 leading-relaxed">
              Every department is built to translate theory into hands-on,
              patient-ready skill.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((d, i) => (
              <Reveal
                key={d.name}
                delay={(i % 3) * 0.06}
                className="bg-paper border border-mist rounded-2xl p-7 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-navy text-green flex items-center justify-center">
                  <DeptIcon name={d.icon} className="w-5 h-5" />
                </div>
                <div className="font-display font-semibold text-navy text-[17px] mt-4">
                  {d.name}
                </div>
                <p className="text-navy/60 text-[14px] mt-2 leading-relaxed">
                  {d.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <div className="tick-rule bg-paper" />
    </>
  );
}
