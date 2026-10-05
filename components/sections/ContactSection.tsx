import { Clock } from "lucide-react";
import type { ContactSectionProps } from "@/types";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection({ config }: ContactSectionProps) {
  const { eyebrow, title, description, channels, hours, departments } = config;

  return (
    <Section id="contact" tone="muted" labelledBy="contact-title">
      <SectionHeading id="contact-title" eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <ul className="flex flex-col gap-4">
            {channels.map((channel) => {
              const body = (
                <>
                  <IconBadge icon={channel.icon} />
                  <div className="flex min-w-0 flex-col">
                    <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      {channel.label}
                    </span>
                    <span className="text-sm font-semibold break-words text-slate-900 sm:text-base">
                      {channel.value}
                    </span>
                  </div>
                </>
              );

              return (
                <Card as="li" key={channel.label} padding="none" interactive={Boolean(channel.href)}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="flex items-center gap-4 rounded-2xl p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5">{body}</div>
                  )}
                </Card>
              );
            })}
          </ul>

          <Card as="aside" aria-labelledby="hours-title" className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <IconBadge icon={Clock} tone="emerald" size="sm" />
              <h3 id="hours-title" className="text-base font-semibold text-slate-900">
                Horarios de atención
              </h3>
            </div>
            <dl className="flex flex-col divide-y divide-slate-100">
              {hours.map((slot) => (
                <div key={slot.days} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-slate-600">{slot.days}</dt>
                  <dd className="font-medium text-slate-900">{slot.hours}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>

        <div className="lg:col-span-7">
          <ContactForm departments={departments} />
        </div>
      </div>
    </Section>
  );
}
