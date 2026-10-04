import type { SectionHeadingProps } from "@/types";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/Badge";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        centered ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Badge tone="brand">{eyebrow}</Badge>
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="text-base leading-7 text-pretty text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
