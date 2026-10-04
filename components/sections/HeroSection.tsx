import Image from "next/image";
import { ArrowRight, Siren, Sparkles } from "lucide-react";
import type { HeroSectionProps } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";

export function HeroSection({ config }: HeroSectionProps) {
  const { badge, title, highlight, description, primaryCta, secondaryCta, image, stats, floatingCard } =
    config;

  return (
    <Section
      id="home"
      labelledBy="hero-title"
      bordered={false}
      className="relative overflow-hidden bg-linear-to-b from-teal-50/70 via-white to-white pt-10 sm:pt-14 lg:pt-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <Badge tone="success" icon={Sparkles}>
            {badge}
          </Badge>

          <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {title} <span className="text-teal-600">{highlight}</span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-pretty text-slate-600">{description}</p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={primaryCta.href} variant={primaryCta.variant} size="lg" icon={ArrowRight}>
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant={secondaryCta.variant} size="lg">
              {secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-4 grid w-full grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:max-w-md">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-slate-500 sm:text-sm">{stat.label}</dt>
                <dd className="order-1 text-2xl font-bold text-slate-900 sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-900/5">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
              preload
              className="h-auto w-full object-cover"
            />
          </div>

          <Card
            padding="sm"
            className="absolute -bottom-6 left-4 flex max-w-xs items-center gap-3 sm:left-6 lg:-left-8"
          >
            <IconBadge icon={Siren} tone="brand" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-slate-900">{floatingCard.title}</p>
              <p className="text-xs text-slate-500">{floatingCard.description}</p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
