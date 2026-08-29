import Image from "next/image";
import Reveal from "./Reveal";
import { highlights } from "@/lib/content";
import Krishnakumar from "../public/krishna-kumar.jpg";
import chairman from "../public/chairman.jpg";
import {
  GraduationCap,
  Activity,
  Stethoscope,
  Building2,
  Users,
  UserCheck,
  HeartHandshake,
  Briefcase,
  Network,
  Award,
  Sparkles,
  Smile,
} from "lucide-react";

// Feature Data Array for Why Choose Us
const whyChooseUsData = [
  {
    icon: GraduationCap,
    title: "Quality Academic Learning",
    description:
      "Build a strong foundation in physiotherapy through structured and comprehensive academic education.",
  },
  {
    icon: Activity,
    title: "Practical Skill Development",
    description:
      "Gain hands-on learning opportunities to understand and apply physiotherapy techniques effectively.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Exposure",
    description:
      "Get opportunities to understand healthcare settings, patient care, rehabilitation, and professional practices.",
  },
  {
    icon: Building2,
    title: "Modern Learning Environment",
    description:
      "Learn in a supportive environment with appropriate facilities and resources for physiotherapy education.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Learn under the guidance of qualified and dedicated faculty members who support students throughout their academic journey.",
  },
  {
    icon: UserCheck,
    title: "Student-Focused Education",
    description:
      "Receive guidance and support to encourage academic growth, confidence, and overall development.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centred Approach",
    description:
      "Develop empathy, communication, and professional values that are essential for responsible healthcare practice.",
  },
  {
    icon: Briefcase,
    title: "Career-Oriented Learning",
    description:
      "Gain knowledge and skills that can help prepare you for diverse career opportunities in physiotherapy.",
  },
  {
    icon: Network,
    title: "Multidisciplinary Exposure",
    description:
      "Understand the importance of teamwork and collaboration within the wider healthcare environment.",
  },
  {
    icon: Award,
    title: "Professional Development",
    description:
      "Develop communication, critical thinking, teamwork, and ethical skills alongside academic knowledge.",
  },
  {
    icon: Sparkles,
    title: "New-Age Learning Approach",
    description:
      "As a newly established institution, we aim to create a forward-looking learning environment aligned with the evolving field of physiotherapy.",
  },
  {
    icon: Smile,
    title: "Supportive Campus Environment",
    description:
      "Experience a positive academic atmosphere that encourages learning, participation, and personal growth.",
  },
];

export default function MissionVision() {
  return (
    <>
      <div className="tick-rule bg-paper" />

      {/* =========================================================
          MISSION & VISION SECTION
      ========================================================= */}
      <section id="mission" className="bg-paper pt-20 md:pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-7">
            <Reveal
              delay={0.1}
              className="bg-[#A8C0E0] border border-navy/10 rounded-3xl p-9 md:p-11 relative overflow-hidden shadow-sm"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-navy font-semibold">
                Vision
              </span>
              <p className="font-display text-[21px] md:text-[24px] leading-snug mt-4 text-navy">
                Our vision is to establish PK Das College of Physiotherapy as a
                centre for quality physiotherapy education and professional
                development. We aim to nurture skilled, confident,
                compassionate, and responsible physiotherapists who can
                contribute positively to healthcare and society. Through quality
                education, practical learning, and clinical exposure, we
                aspire to prepare students to meet the changing needs of the
                healthcare sector.
              </p>
            </Reveal>

            <Reveal className="bg-[#A8C0E0] border border-navy/10 rounded-3xl p-9 md:p-11 relative overflow-hidden shadow-sm">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-navy font-semibold">
                Mission
              </span>
              <p className="font-display text-[21px] md:text-[24px] leading-snug mt-4 text-navy">
                Our mission is to provide students with a strong foundation in
                physiotherapy through quality academic education, practical
                training, and clinical learning. We aim to create a supportive
                learning environment where students can develop professional
                knowledge, practical skills, communication abilities, critical
                thinking, empathy, and ethical values. The college is committed
                to encouraging students to follow evidence-based practices and
                develop the confidence required to contribute effectively to
                patient care and rehabilitation.
              </p>
            </Reveal>
          </div>

          {/* Highlights Grid */}
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

          {/* =========================================================
              WHY CHOOSE US SECTION
          ========================================================= */}
          <div className="mt-20 md:mt-28">
            {/* Header */}
            <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-amber-dark font-semibold">
                Excellence in Healthcare Education
              </span>
              <h2 className="font-display text-[32px] md:text-[44px] font-semibold text-navy mt-2">
                Why Choose Us?
              </h2>
              <div className="w-12 h-1 bg-[#A8C0E0] mx-auto mt-4 rounded-full" />
            </Reveal>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUsData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    delay={index * 0.03}
                    className="bg-white rounded-2xl border border-mist p-7 transition-all duration-300 hover:shadow-md hover:border-[#A8C0E0]/60 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-[#A8C0E0]/20 text-navy flex items-center justify-center mb-5 group-hover:bg-[#A8C0E0] transition-colors duration-300">
                        <IconComponent className="w-6 h-6 stroke-[1.75]" />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-navy font-bold text-[18px] leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-navy/65 text-[14px] leading-relaxed mt-2.5">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MANAGEMENT SECTION (Continuous background, no gap)
      ========================================================= */}
      <section id="management" className="bg-paper pb-20 md:pb-28 pt-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Title Header */}
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-[32px] md:text-[44px] font-semibold text-navy">
              Management
            </h2>
          </Reveal>

          <div className="space-y-24">
            {/* BLOCK 1: Adv. Dr. P Krishnadas (Content Left, Image Right) */}
            <Reveal delay={0.1} className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="md:col-span-7 flex flex-col justify-between h-full pt-1 order-2 md:order-1">
                <div className="space-y-4 text-navy/70 text-[15px] md:text-[16px] leading-relaxed">
                  <p>
                    It gives me great pleasure to welcome you to PK Das College of
                    Physiotherapy. The establishment of this institution marks a new step
                    towards providing aspiring healthcare professionals with opportunities
                    to build meaningful careers in physiotherapy.
                  </p>
                  <p>
                    At PK Das College of Physiotherapy, we believe that good education
                    should combine knowledge with practical experience. Our aim is to provide
                    students with a strong academic foundation along with opportunities to
                    develop practical and clinical skills.
                  </p>
                  <p>
                    We also believe in nurturing qualities such as compassion, discipline,
                    communication, teamwork, and professional responsibility. I wish all
                    our students a successful and fulfilling journey at PK Das College of
                    Physiotherapy.
                  </p>
                </div>

                {/* Signature Block (Left Aligned) */}
                <div className="mt-8 text-left">
                  <p className="font-semibold text-navy text-[16px]">
                    Adv. Dr. P Krishnadas
                  </p>
                  <p className="text-navy/65 text-[14px]">
                    Chairman &amp; Managing Trustee
                  </p>
                  <p className="text-navy/65 text-[14px]">
                    PK Das Group of Institutions
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 order-1 md:order-2">
                <div className="relative overflow-hidden rounded-xl border border-mist shadow-sm w-full aspect-[4/3] md:aspect-[5/4]">
                  <Image
                    src={chairman}
                    alt="Adv. Dr. P Krishnadas"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            {/* BLOCK 2: Dr. P. Krishnakumar (Image Left, Content Right) */}
            <Reveal className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="md:col-span-5">
                <div className="relative overflow-hidden rounded-xl border border-mist shadow-sm w-full aspect-[4/3] md:aspect-[5/4]">
                  <Image
                    src={Krishnakumar}
                    alt="Dr. P. Krishnakumar"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between h-full pt-1">
                <div className="space-y-4 text-navy/70 text-[15px] md:text-[16px] leading-relaxed">
                  <p>
                    The Nehru Group of Institutions enable our students and professionals to seek quality education and a successful career. All our efforts are aimed to make sure that we show them the right path and give that final push for students and faculty to achieve their true destiny.
                  </p>
                  <p>
                    Everything in this day and age is interconnected, and education is no exception. We at Nehru Group of Institutions always have focused on equipping our students with vital skill sets so as to compete effectively in today&apos;s global market.
                  </p>
                  <p>
                    Our support is with you always, and I wish you all the success in every endeavour you take up for the growth and development of the students and faculty of Nehru Group of Institutions.
                  </p>
                </div>

                {/* Signature Block (Right Aligned) */}
                <div className="mt-8 text-right">
                  <p className="font-semibold text-navy text-[16px]">
                    Dr.P.Krishnakumar
                  </p>
                  <p className="text-navy/65 text-[14px]">
                    CEO &amp; Secretary,
                  </p>
                  <p className="text-navy/65 text-[14px]">
                    Nehru Group of Institution
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}