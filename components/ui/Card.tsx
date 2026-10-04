import type { CardProps } from "@/types";
import { cn } from "@/lib/cn";

const paddingStyles: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-6 sm:p-8",
};

export function Card({
  as: Component = "div",
  interactive = false,
  padding = "md",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80",
        paddingStyles[padding],
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-teal-200",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
