import type { IconBadgeProps, IconBadgeSize, IconBadgeTone } from "@/types";
import { cn } from "@/lib/cn";

const toneStyles: Record<IconBadgeTone, string> = {
  brand: "bg-teal-50 text-teal-700 ring-teal-100",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  slate: "bg-slate-100 text-slate-700 ring-slate-200",
  inverse: "bg-white/10 text-white ring-white/20",
};

const boxSizes: Record<IconBadgeSize, string> = {
  sm: "size-9 rounded-lg",
  md: "size-11 rounded-xl",
  lg: "size-14 rounded-2xl",
};

const iconSizes: Record<IconBadgeSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-7",
};

export function IconBadge({
  icon: Icon,
  tone = "brand",
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center ring-1 ring-inset",
        toneStyles[tone],
        boxSizes[size],
        className
      )}
    >
      <Icon aria-hidden="true" className={iconSizes[size]} />
    </span>
  );
}
