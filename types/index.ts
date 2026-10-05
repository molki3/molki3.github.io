import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                               Shared primitives                            */
/* -------------------------------------------------------------------------- */

export type Href =
  | `#${string}`
  | `/${string}`
  | `tel:${string}`
  | `mailto:${string}`
  | `https://${string}`;

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type BadgeTone = "brand" | "neutral" | "success" | "inverse";
export type IconBadgeTone = "brand" | "emerald" | "slate" | "inverse";
export type IconBadgeSize = "sm" | "md" | "lg";
export type SectionTone = "white" | "muted" | "brand";
export type ContainerSize = "md" | "lg" | "xl";
export type TextAlign = "left" | "center";

export interface NavLink {
  label: string;
  href: Href;
}

export interface CallToAction extends NavLink {
  variant?: ButtonVariant;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/* -------------------------------------------------------------------------- */
/*                               Data collections                             */
/* -------------------------------------------------------------------------- */

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: readonly string[];
}

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactChannel {
  label: string;
  value: string;
  href?: Href;
  icon: LucideIcon;
}

export interface OpeningHour {
  days: string;
  hours: string;
}

export interface FooterColumn {
  title: string;
  links: readonly NavLink[];
}

export interface SocialLink extends NavLink {
  icon: LucideIcon;
}

/* -------------------------------------------------------------------------- */
/*                               Section configs                              */
/* -------------------------------------------------------------------------- */

export interface HeaderConfig {
  brand: string;
  tagline: string;
  navLinks?: readonly NavLink[];
  emergencyPhone: NavLink;
  cta: CallToAction;
}

export interface HeroConfig {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  image: ImageAsset;
  stats: readonly Stat[];
  floatingCard: {
    title: string;
    description: string;
  };
}

export interface ServicesConfig {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly Service[];
}

export interface AboutConfig {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  image: ImageAsset;
  values: readonly CoreValue[];
  accreditation: {
    title: string;
    description: string;
  };
  cta: CallToAction;
}

export interface ContactConfig {
  eyebrow: string;
  title: string;
  description: string;
  channels: readonly ContactChannel[];
  hours: readonly OpeningHour[];
  departments: readonly string[];
}

export interface FooterConfig {
  brand: string;
  description: string;
  columns: readonly FooterColumn[];
  socials: readonly SocialLink[];
  legal: string;
}

export interface SiteContent {
  header: HeaderConfig;
  hero: HeroConfig;
  services: ServicesConfig;
  about: AboutConfig;
  contact: ContactConfig;
  footer: FooterConfig;
}

/* -------------------------------------------------------------------------- */
/*                               Contact form domain                          */
/* -------------------------------------------------------------------------- */

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactFormStatus = "idle" | "submitting" | "success";

/* -------------------------------------------------------------------------- */
/*                               UI primitive props                           */
/* -------------------------------------------------------------------------- */

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "start" | "end";
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

export type ButtonAsLinkProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | "href"> & {
    href: Href;
  };

export type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "li" | "aside";
  interactive?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  children: ReactNode;
}

export interface BadgeProps {
  tone?: BadgeTone;
  icon?: LucideIcon;
  className?: string;
  children: ReactNode;
}

export interface ContainerProps {
  as?: "div" | "section" | "header" | "footer" | "nav";
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

export interface SectionProps {
  id: string;
  tone?: SectionTone;
  bordered?: boolean;
  labelledBy?: string;
  containerSize?: ContainerSize;
  className?: string;
  children: ReactNode;
}

export interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: TextAlign;
  className?: string;
}

export interface IconBadgeProps {
  icon: LucideIcon;
  tone?: IconBadgeTone;
  size?: IconBadgeSize;
  className?: string;
}

interface FieldBaseProps {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  optional?: boolean;
}

export type InputProps = FieldBaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id">;

export type TextareaProps = FieldBaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "id">;

export type SelectProps = FieldBaseProps &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, "name" | "id"> & {
    options: readonly string[];
    placeholder?: string;
  };

/* -------------------------------------------------------------------------- */
/*                               Section props                                */
/* -------------------------------------------------------------------------- */

export interface HeaderBarProps {
  config: HeaderConfig;
}

export interface HeroSectionProps {
  config: HeroConfig;
}

export interface ServicesSectionProps {
  config: ServicesConfig;
}

export interface ServiceCardProps {
  service: Service;
}

export interface AboutSectionProps {
  config: AboutConfig;
}

export interface ContactSectionProps {
  config: ContactConfig;
}

export interface ContactFormProps {
  departments: readonly string[];
}

export interface FooterSectionProps {
  config: FooterConfig;
}
