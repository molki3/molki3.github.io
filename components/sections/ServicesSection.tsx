import { CircleCheck } from "lucide-react";
import type { ServiceCardProps, ServicesSectionProps } from "@/types";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ServiceCard({ service }: ServiceCardProps) {
  const headingId = `service-${service.id}`;

  return (
    <Card as="li" interactive padding="lg" aria-labelledby={headingId} className="flex flex-col gap-5">
      <IconBadge icon={service.icon} size="lg" />
      <div className="flex flex-col gap-2">
        <h3 id={headingId} className="text-lg font-semibold text-slate-900">
          {service.title}
        </h3>
        <p className="text-sm leading-6 text-slate-600">{service.description}</p>
      </div>
      <ul className="mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-2 text-sm text-slate-700">
            <CircleCheck aria-hidden="true" className="size-4 shrink-0 text-emerald-600" />
            {highlight}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function ServicesSection({ config }: ServicesSectionProps) {
  const { eyebrow, title, description, items } = config;

  return (
    <Section id="services" tone="muted" labelledBy="services-title">
      <SectionHeading id="services-title" eyebrow={eyebrow} title={title} description={description} />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {items.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </Section>
  );
}
