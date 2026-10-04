import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { AboutSectionProps } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection({ config }: AboutSectionProps) {
  const { eyebrow, title, paragraphs, image, values, accreditation, cta } = config;

  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/5 sm:aspect-[4/3] lg:aspect-[5/6]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <Card
            padding="sm"
            className="absolute right-4 -bottom-6 flex max-w-xs items-center gap-3 sm:right-6 lg:-right-8"
          >
            <IconBadge icon={ShieldCheck} tone="emerald" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-slate-900">{accreditation.title}</p>
              <p className="text-xs text-slate-500">{accreditation.description}</p>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading id="about-title" eyebrow={eyebrow} title={title} align="left" />

          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-pretty text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <li key={value.title} className="flex gap-4">
                <IconBadge icon={value.icon} size="sm" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-slate-900">{value.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{value.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <Button href={cta.href} variant={cta.variant} icon={ArrowRight}>
              {cta.label}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
