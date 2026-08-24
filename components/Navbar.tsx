import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/content";

export default function Navbar() {
  return (
    <>
      {/* Utility bar */}
      <div className="bg-navy text-white/80 text-[13px]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={contact.admissionHotlineHref}
              className="flex items-center gap-1.5 hover:text-amber transition"
            >
              <PhoneIcon />
              <span className="hidden sm:inline">{contact.admissionHotline}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-amber transition"
            >
              <MailIcon />
              {contact.email}
            </a>
          </div>
          <div className="text-amber font-medium tracking-wide text-[11px] sm:text-[12px]">
            ADMISSION ENQUIRY 2024–25 · {contact.enquiryNumbers.join(" / ")}
          </div>
        </div>
      </div>

      {/* Nav */}
      <header
        id="top"
        className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-mist"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
          <Link href="#top" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="P.K. Das Institute of Medical Sciences"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <div className="leading-tight">
              <div className="font-display font-semibold text-[17px] text-navy">
                P.K. Das College
              </div>
              <div className="font-mono text-[10px] tracking-[0.18em] text-green uppercase">
                of Physiotherapy
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9 font-medium text-[14.5px] text-navy/80">
            <a href="#about" className="hover:text-green transition">About</a>
            <a href="#mission" className="hover:text-green transition">Mission &amp; Vision</a>
            <a href="#departments" className="hover:text-green transition">Departments</a>
            <a href="#admissions" className="hover:text-green transition">Admissions</a>
            <a href="#contact" className="hover:text-green transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNZi8r2gbHvLu9wPG5GALbA4HN3PeTT5cK1WyEh1pHMDBeFw/viewform"
              className="hidden sm:inline-block text-navy font-semibold text-[14px] border border-navy/20 rounded-full px-5 py-2.5 hover:border-green hover:text-green transition"
            >
              Enquire Now
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNZi8r2gbHvLu9wPG5GALbA4HN3PeTT5cK1WyEh1pHMDBeFw/viewform"
              className="inline-block bg-amber text-white font-semibold text-[14px] rounded-full px-5 py-2.5 hover:bg-amber-dark transition shadow-[0_10px_24px_-10px_rgba(232,150,60,.7)]"
            >
              Apply Now
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="m22 6-10 7L2 6" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}
