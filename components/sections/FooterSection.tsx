import { HeartPulse } from "lucide-react";
import type { FooterSectionProps } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function FooterSection({ config }: FooterSectionProps) {
  const { brand, description, columns, socials, legal } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-teal-500 text-white">
                <HeartPulse aria-hidden="true" className="size-5" />
              </span>
              <span className="text-base font-bold text-white">{brand}</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-400">{description}</p>
            <Badge tone="inverse" className="self-start">
              Abierto 24/7 para emergencias
            </Badge>
            <ul className="flex gap-3" aria-label="Enlaces sociales y de contacto">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10 transition-colors hover:bg-teal-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
                <h2 className="text-sm font-semibold tracking-wide text-white uppercase">{column.title}</h2>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {legal}
          </p>
          <p>La información de este sitio no sustituye el asesoramiento médico profesional.</p>
        </div>
      </Container>
    </footer>
  );
}
