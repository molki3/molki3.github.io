import { HeartPulse, Phone } from "lucide-react";
import type { HeaderBarProps } from "@/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Minimal, non-intrusive top bar. Intentionally contains no navigation
 * links or menu toggles. Primary navigation is owned by the lateral
 * shell in `app/layout.tsx`.
 */
export function HeaderBar({ config }: HeaderBarProps) {
  const { brand, tagline, emergencyPhone, cta } = config;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white shadow-sm">
            <HeartPulse aria-hidden="true" className="size-5" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-bold text-slate-900 sm:text-base">{brand}</span>
            <span className="hidden truncate text-xs text-slate-500 sm:block">{tagline}</span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href={emergencyPhone.href}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50 md:inline-flex"
          >
            <Phone aria-hidden="true" className="size-4" />
            {emergencyPhone.label}
          </a>
          <Button href={cta.href} variant={cta.variant} size="sm">
            {cta.label}
          </Button>
        </div>
      </Container>
    </header>
  );
}
