import type { ContainerProps, ContainerSize } from "@/types";
import { cn } from "@/lib/cn";

const sizeStyles: Record<ContainerSize, string> = {
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

export function Container({
  as: Component = "div",
  size = "xl",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeStyles[size], className)}
    >
      {children}
    </Component>
  );
}
