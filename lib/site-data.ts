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
    brand: "Centro Médico Serenity",
    tagline: "Atención médica humana y moderna",
    emergencyPhone: { label: "Urgencias: (555) 010-9111", href: "tel:+15550109111" },
    cta: { label: "Solicitar cita", href: "#contact", variant: "primary" },
  },

  hero: {
    badge: "Aceptamos nuevos pacientes",
    title: "Atención médica que te pone",
    highlight: "en primer lugar",
    description:
      "Desde chequeos de rutina hasta tratamientos especializados, nuestros médicos certificados brindan atención personalizada y basada en evidencia en un entorno cálido y acogedor.",
    primaryCta: { label: "Solicitar una cita", href: "#contact", variant: "primary" },
    secondaryCta: { label: "Explorar servicios", href: "#services", variant: "outline" },
    image: {
      src: placeholder(1200, 900, "Equipo Médico"),
      alt: "Médicos del Centro Médico Serenity revisando el historial de un paciente",
      width: 1200,
      height: 900,
    },
    stats: [
      { value: "25+", label: "Años de experiencia" },
      { value: "60+", label: "Especialistas" },
      { value: "98%", label: "Satisfacción del paciente" },
    ],
    floatingCard: {
      title: "Atención de urgencias 24/7",
      description: "Respuesta rápida, todos los días del año.",
    },
  },

  services: {
    eyebrow: "Nuestros servicios",
    title: "Atención integral bajo un mismo techo",
    description:
      "Departamentos integrados e historiales compartidos significan diagnósticos más rápidos, tratamientos coordinados y menos desplazamientos para usted y su familia.",
    items: [
      {
        id: "primary-care",
        title: "Medicina General / Primaria",
        description: "Chequeos preventivos, control de enfermedades crónicas y consultas en la misma semana.",
        icon: Stethoscope,
        highlights: ["Exámenes físicos anuales", "Vacunación", "Planes de cuidado crónico"],
      },
      {
        id: "cardiology",
        title: "Cardiología",
        description: "Evaluaciones y tratamientos de salud cardiovascular dirigidos por cardiólogos experimentados.",
        icon: Activity,
        highlights: ["Electrocardiograma y pruebas de esfuerzo", "Control de hipertensión", "Rehabilitación cardíaca"],
      },
      {
        id: "pediatrics",
        title: "Pediatría",
        description: "Atención humana y familiar desde las visitas al recién nacido hasta la adolescencia.",
        icon: Baby,
        highlights: ["Control de niño sano", "Evaluación del desarrollo", "Consultas por enfermedad"],
      },
      {
        id: "diagnostics",
        title: "Diagnóstico e Imágenes",
        description: "Laboratorio y radiología integrados con resultados rápidos y seguros en su portal de paciente.",
        icon: ScanLine,
        highlights: ["Resonancia magnética y tomografía", "Ecografía / Ultrasonido", "Resultados de laboratorio el mismo día"],
      },
      {
        id: "womens-health",
        title: "Salud de la Mujer",
        description: "Cuidado ginecológico, prenatal y menopausia comprensivo en cada etapa de la vida.",
        icon: Venus,
        highlights: ["Control prenatal", "Chequeos ginecológicos", "Acompañamiento en la menopausia"],
      },
      {
        id: "emergency",
        title: "Urgencias / Emergencias",
        description: "Departamento de emergencias las 24 horas atendido por especialistas en cuidados críticos.",
        icon: Ambulance,
        highlights: ["Abierto 24/7", "Equipo preparado para trauma", "Tiempos de espera reducidos"],
      },
    ],
  },

  about: {
    eyebrow: "Nosotros",
    title: "Un hospital comunitario con estándares internacionales",
    paragraphs: [
      "Fundado en 1999, el Centro Médico Serenity ha pasado de ser una clínica de barrio a un centro médico de servicio completo en el que confían más de 40.000 familias.",
      "Combinamos la calidez de la atención comunitaria con tecnología moderna y un equipo multidisciplinario, garantizando que cada paciente reciba la atención adecuada en el momento oportuno.",
    ],
    image: {
      src: placeholder(1000, 1200, "Nuestras Instalaciones"),
      alt: "Recepción moderna y luminosa del Centro Médico Serenity",
      width: 1000,
      height: 1200,
    },
    values: [
      {
        title: "El paciente primero",
        description: "Planes de salud diseñados según sus objetivos y horarios.",
        icon: HandHeart,
      },
      {
        title: "Equipo experto",
        description: "Médicos certificados y enfermeros dedicados.",
        icon: Users,
      },
      {
        title: "Tecnología moderna",
        description: "Diagnósticos avanzados e historial clínico digital seguro.",
        icon: Microscope,
      },
      {
        title: "Atención accesible",
        description: "Instalaciones accesibles y aceptación de la mayoría de seguros.",
        icon: Accessibility,
      },
    ],
    accreditation: {
      title: "Totalmente acreditado",
      description: "Reconocido por la seguridad del paciente y la calidad médica.",
    },
    cta: { label: "Conozca a nuestros especialistas", href: "#contact", variant: "secondary" },
  },

  contact: {
    eyebrow: "Contacto",
    title: "Estamos aquí para ayudarle",
    description:
      "Envíenos un mensaje para solicitar una cita o hacer una consulta. Nuestro equipo de atención al paciente responde en menos de 24 horas hábiles.",
    channels: [
      { label: "Llámenos", value: "(555) 010-2000", href: "tel:+15550102000", icon: Phone },
      {
        label: "Correo electrónico",
        value: "atencion@serenitymedico.ejemplo",
        href: "mailto:atencion@serenitymedico.ejemplo",
        icon: Mail,
      },
      { label: "Visítenos", value: "Av. Las Flores 1200, Oficina 100, Ciudad", icon: MapPin },
    ],
    hours: [
      { days: "Lunes a Viernes", hours: "7:00 AM – 8:00 PM" },
      { days: "Sábados", hours: "8:00 AM – 4:00 PM" },
      { days: "Domingos", hours: "Solo urgencias" },
    ],
    departments: [
      "Medicina General / Primaria",
      "Cardiología",
      "Pediatría",
      "Diagnóstico e Imágenes",
      "Salud de la Mujer",
      "Facturación y Seguros",
      "Otros",
    ],
  },

  footer: {
    brand: "Centro Médico Serenity",
    description:
      "Atención médica humana y moderna para cada etapa de la vida. Acreditados, arraigados en la comunidad y abiertos 24/7 para emergencias.",
    columns: [
      {
        title: "Servicios",
        links: [
          { label: "Medicina General", href: "#services" },
          { label: "Cardiología", href: "#services" },
          { label: "Pediatría", href: "#services" },
          { label: "Urgencias 24/7", href: "#services" },
        ],
      },
      {
        title: "Centro Médico",
        links: [
          { label: "Nosotros", href: "#about" },
          { label: "Nuestros especialistas", href: "#about" },
          { label: "Contacto", href: "#contact" },
        ],
      },
      {
        title: "Pacientes",
        links: [
          { label: "Solicitar cita", href: "#contact" },
          { label: "Línea de urgencias", href: "tel:+15550109111" },
          { label: "Correo de atención", href: "mailto:atencion@serenitymedico.ejemplo" },
        ],
      },
    ],
    socials: [
      { label: "Sitio web", href: "https://serenitymedico.ejemplo", icon: Globe },
      { label: "Chat de atención", href: "#contact", icon: MessageCircle },
      { label: "Correo", href: "mailto:atencion@serenitymedico.ejemplo", icon: Mail },
      { label: "Noticias de salud", href: "https://serenitymedico.ejemplo/noticias", icon: Rss },
    ],
    legal: "Centro Médico Serenity. Todos los derechos reservados.",
  },
} satisfies SiteContent;
