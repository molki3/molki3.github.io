import {
  Accessibility,
  Activity,
  Ambulance,
  Baby,
  Globe,
  HandHeart,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Rss,
  ScanLine,
  Stethoscope,
  Users,
  Venus,
} from "lucide-react";
import type { SiteContent } from "@/types";

const placeholder = (width: number, height: number, text: string): string =>
  `https://placehold.co/${width}x${height}/png?text=${encodeURIComponent(text)}&bg=ccfbf1&fg=0f766e`;

export const siteContent = {
  header: {
    brand: "Serenity Medical Center",
    tagline: "Compassionate, modern care",
    emergencyPhone: { label: "Emergency: (555) 010-9111", href: "tel:+15550109111" },
    cta: { label: "Book appointment", href: "#contact", variant: "primary" },
  },

  hero: {
    badge: "Accepting new patients",
    title: "Healthcare that puts",
    highlight: "you first",
    description:
      "From routine check-ups to specialized treatment, our board-certified physicians deliver personalized, evidence-based care in a calm and welcoming environment.",
    primaryCta: { label: "Book an appointment", href: "#contact", variant: "primary" },
    secondaryCta: { label: "Explore services", href: "#services", variant: "outline" },
    image: {
      src: placeholder(1200, 900, "Care Team"),
      alt: "Serenity Medical Center physicians reviewing a patient chart together",
      width: 1200,
      height: 900,
    },
    stats: [
      { value: "25+", label: "Years of care" },
      { value: "60+", label: "Specialists" },
      { value: "98%", label: "Patient satisfaction" },
    ],
    floatingCard: {
      title: "24/7 Emergency care",
      description: "Rapid response, every day of the year.",
    },
  },

  services: {
    eyebrow: "Our services",
    title: "Comprehensive care under one roof",
    description:
      "Integrated departments and shared records mean faster diagnoses, coordinated treatment, and fewer trips for you and your family.",
    items: [
      {
        id: "primary-care",
        title: "Primary Care",
        description: "Preventive check-ups, chronic condition management, and same-week visits.",
        icon: Stethoscope,
        highlights: ["Annual physicals", "Vaccinations", "Chronic care plans"],
      },
      {
        id: "cardiology",
        title: "Cardiology",
        description: "Heart health assessments and treatment led by experienced cardiologists.",
        icon: Activity,
        highlights: ["ECG & stress tests", "Hypertension care", "Cardiac rehab"],
      },
      {
        id: "pediatrics",
        title: "Pediatrics",
        description: "Gentle, family-centered care from newborn visits through adolescence.",
        icon: Baby,
        highlights: ["Well-child visits", "Developmental screening", "Sick-day appointments"],
      },
      {
        id: "diagnostics",
        title: "Diagnostics & Imaging",
        description: "On-site lab and imaging with fast, secure results delivered to your portal.",
        icon: ScanLine,
        highlights: ["MRI & CT", "Ultrasound", "Same-day lab results"],
      },
      {
        id: "womens-health",
        title: "Women's Health",
        description: "Compassionate gynecological, prenatal, and menopause care at every stage.",
        icon: Venus,
        highlights: ["Prenatal care", "Screenings", "Menopause support"],
      },
      {
        id: "emergency",
        title: "Emergency Care",
        description: "Round-the-clock emergency department staffed by critical-care specialists.",
        icon: Ambulance,
        highlights: ["Open 24/7", "Trauma-ready team", "Short wait times"],
      },
    ],
  },

  about: {
    eyebrow: "About us",
    title: "A community hospital with world-class standards",
    paragraphs: [
      "Founded in 1999, Serenity Medical Center has grown from a neighborhood clinic into a full-service medical center trusted by more than 40,000 families.",
      "We combine the warmth of community care with modern technology and a multidisciplinary team, so every patient receives the right care at the right time.",
    ],
    image: {
      src: placeholder(1000, 1200, "Our Facility"),
      alt: "Bright, modern reception area at Serenity Medical Center",
      width: 1000,
      height: 1200,
    },
    values: [
      {
        title: "Patient-first",
        description: "Care plans built around your goals and schedule.",
        icon: HandHeart,
      },
      {
        title: "Expert team",
        description: "Board-certified physicians and dedicated nurses.",
        icon: Users,
      },
      {
        title: "Modern technology",
        description: "Advanced diagnostics and secure digital records.",
        icon: Microscope,
      },
      {
        title: "Accessible care",
        description: "Barrier-free facilities and most insurance accepted.",
        icon: Accessibility,
      },
    ],
    accreditation: {
      title: "Fully accredited",
      description: "Recognized for patient safety and quality of care.",
    },
    cta: { label: "Meet our specialists", href: "#contact", variant: "secondary" },
  },

  contact: {
    eyebrow: "Contact",
    title: "We're here to help",
    description:
      "Send us a message to request an appointment or ask a question. Our patient care team replies within one business day.",
    channels: [
      { label: "Call us", value: "(555) 010-2000", href: "tel:+15550102000", icon: Phone },
      {
        label: "Email",
        value: "care@serenitymedical.example",
        href: "mailto:care@serenitymedical.example",
        icon: Mail,
      },
      { label: "Visit", value: "1200 Harbor Avenue, Suite 100, Springfield", icon: MapPin },
    ],
    hours: [
      { days: "Monday – Friday", hours: "7:00 AM – 8:00 PM" },
      { days: "Saturday", hours: "8:00 AM – 4:00 PM" },
      { days: "Sunday", hours: "Emergency only" },
    ],
    departments: [
      "Primary Care",
      "Cardiology",
      "Pediatrics",
      "Diagnostics & Imaging",
      "Women's Health",
      "Billing & Insurance",
      "Other",
    ],
  },

  footer: {
    brand: "Serenity Medical Center",
    description:
      "Compassionate, modern healthcare for every stage of life. Accredited, community-rooted, and open 24/7 for emergencies.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Primary Care", href: "#services" },
          { label: "Cardiology", href: "#services" },
          { label: "Pediatrics", href: "#services" },
          { label: "Emergency Care", href: "#services" },
        ],
      },
      {
        title: "Center",
        links: [
          { label: "About us", href: "#about" },
          { label: "Our specialists", href: "#about" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Patients",
        links: [
          { label: "Book appointment", href: "#contact" },
          { label: "Emergency line", href: "tel:+15550109111" },
          { label: "Email the care team", href: "mailto:care@serenitymedical.example" },
        ],
      },
    ],
    socials: [
      { label: "Website", href: "https://serenitymedical.example", icon: Globe },
      { label: "Patient chat", href: "#contact", icon: MessageCircle },
      { label: "Email", href: "mailto:care@serenitymedical.example", icon: Mail },
      { label: "Health news", href: "https://serenitymedical.example/news", icon: Rss },
    ],
    legal: "Serenity Medical Center. All rights reserved.",
  },
} satisfies SiteContent;
