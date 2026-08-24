export const contact = {
  institution:
    "P.K. Das Institute of Medical Sciences — Hospital and Medical College",
  address:
    "Panayoor, Vaniyamkulam, Ottapalam, Palakkad District – 679522, Kerala, India",
  admissionHotline: "+91 90613 3877",
  admissionHotlineHref: "tel:+919061333877",
  enquiryNumbers: ["9656000005", "9605771555"],
  email: "admissions@ncerc.ac.in",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=P.K.%20Das%20Institute%20of%20Medical%20Sciences%2C%20Panayoor%2C%20Vaniyamkulam%2C%20Ottapalam%2C%20Palakkad&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapLinkHref:
    "https://www.google.com/maps/search/?api=1&query=P.K.+Das+Institute+of+Medical+Sciences+Panayoor+Vaniyamkulam+Ottapalam+Palakkad",
};

import { deptIconPaths } from "../components/DeptIcons";

export type Department = {
  name: string;
  icon: keyof typeof deptIconPaths;
  text: string;
};

export const departments: Department[] = [
  {
    name: "Anatomy Museum",
    icon: "bone",
    text: "Trains students across all branches of human anatomy using traditional and innovative methods — with charts, bones, organs, specimens and slides supporting projector-led, smart-class coaching.",
  },
  {
    name: "Physiology Museum",
    icon: "pulse",
    text: "Devoted to training and education in physiology, pushing the boundaries of scientific discovery — with specimens, charts and diagrammatic representations of the human system.",
  },
  {
    name: "Microbiology Lab",
    icon: "microscope",
    text: "Uses mechanical devices and structured movement approaches to restore normal musculoskeletal function, reduce pain from disease or injury, and promote mobility — kept current with modern developments.",
  },
  {
    name: "Exercise Therapy Lab",
    icon: "figure",
    text: "Focuses on improving strength, mobility and function through tailored physical exercises using modern equipment for rehabilitation and prevention.",
  },
  {
    name: "Massage Therapy & Manipulation Lab",
    icon: "hands",
    text: "Manual and instrument-assisted manipulation techniques — including activator and drop-table methods — for therapeutic, targeted pain management.",
  },
  {
    name: "Electrotherapy Lab",
    icon: "bolt",
    text: "Central to managing pain and paralysis — promoting muscle relaxation, reducing spasm, preventing disuse atrophy and enhancing local blood circulation.",
  },
  {
    name: "Cardiology Lab",
    icon: "heart",
    text: "Equipped with the essential tools and apparatus for both emergency response and the treatment of cardiac conditions in physiotherapeutic care.",
  },
  {
    name: "Orthopaedic Lab",
    icon: "joint",
    text: "Physiotherapy care for joint pain, injuries, surgeries and replacements — with training in orthosis and prosthesis, and a focus on prevention and education.",
  },
  {
    name: "Laser Therapy Lab",
    icon: "laser",
    text: "Low-Level Laser Therapy (LLLT) relieves pain, reduces inflammation and accelerates healing — stimulating cellular repair without heat, sound or vibration.",
  },
];

export const highlights = [
  {
    n: "01",
    title: "KUHS Affiliated",
    text: "Recognised under the Kerala University of Health Sciences.",
  },
  {
    n: "02",
    title: "Hospital-Linked Training",
    text: "Clinical exposure via a superspeciality hospital & advanced clinical setup.",
  },
  {
    n: "03",
    title: "Modern Laboratories",
    text: "Nine dedicated labs covering the full physiotherapy curriculum.",
  },
  {
    n: "04",
    title: "Experienced Faculty",
    text: "Guided by experienced medical & physiotherapy professionals.",
  },
];
