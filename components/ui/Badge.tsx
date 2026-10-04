import type { BadgeProps, BadgeTone } from "@/types";
import { cn } from "@/lib/cn";

const toneStyles: Record<BadgeTone, string> = {
  brand: "bg-teal-50 text-teal-700 ring-teal-600/20",
  neutral: "bg-slate-100 text-slate-700 ring-slate-500/20",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  inverse: "bg-white/10 text-white ring-white/20",
};

export function Badge({ tone = "brand", icon: Icon, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ring-1 ring-inset",
        toneStyles[tone],
        className
      )}
    >
      {Icon && <Icon aria-hidden="true" className="size-3.5" />}
      {children}
    </span>
  );
}
