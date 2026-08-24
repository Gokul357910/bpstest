import Reveal from "./Reveal";
import { highlights } from "@/lib/content";

export default function MissionVision() {
  return (
    <>
      <div className="tick-rule bg-paper" />
      <section id="mission" className="bg-paper">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-7">
            <Reveal className="bg-navy text-white rounded-3xl p-9 md:p-11 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-green/15 blur-2xl" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-green">
                Our Mission
              </span>
              <p className="font-display text-[21px] md:text-[24px] leading-snug mt-4 text-white/95">
                To educate and empower future physiotherapists with
                comprehensive clinical and professional skills — enabling
                them to excel in leadership and research, contribute to
                communities, promote health, prevent disability, improve
                physical function and encourage active, healthy movement.
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className="bg-white border border-mist rounded-3xl p-9 md:p-11 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-amber/10 blur-2xl" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-amber-dark">
                Our Vision
              </span>
              <p className="font-display text-[21px] md:text-[24px] leading-snug mt-4 text-navy">
                To produce highly motivated, competent and compassionate
                physiotherapists equipped with the knowledge, skills and
                professional values to meet national and international
                standards in physiotherapy education and practice.
              </p>
            </Reveal>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <Reveal
                key={h.n}
                delay={i * 0.05}
                className="bg-white rounded-2xl border border-mist p-6 card-hover"
              >
                <div className="font-mono text-amber-dark text-[12px] tracking-widest">
                  {h.n}
                </div>
                <div className="font-display text-navy font-semibold mt-2 text-[16px]">
                  {h.title}
                </div>
                <p className="text-navy/60 text-[13.5px] mt-1.5">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
