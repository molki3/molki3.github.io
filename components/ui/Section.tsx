import type { SectionProps, SectionTone } from "@/types";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

const toneStyles: Record<SectionTone, string> = {
  white: "bg-white",
  muted: "bg-slate-50",
  brand: "bg-teal-700 text-white",
};

/**
 * Anchorable page section. `scroll-mt-20` offsets the sticky header so
 * in-page anchor links (from the header or a lateral shell) land cleanly.
 */
export function Section({
  id,
  tone = "white",
  bordered = true,
  labelledBy,
  containerSize = "xl",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-20 py-16 sm:py-20 lg:py-24",
        toneStyles[tone],
        bordered && "border-t border-slate-100",
        className
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
