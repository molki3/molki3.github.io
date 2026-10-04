import type {
  ButtonAsLinkProps,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "@/types";
import { cn } from "@/lib/cn";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-teal-600 text-white shadow-sm hover:bg-teal-700",
  secondary: "bg-slate-900 text-white shadow-sm hover:bg-slate-800",
  outline:
    "bg-white text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 hover:ring-slate-400",
  ghost: "text-teal-700 hover:bg-teal-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const iconSizes: Record<ButtonSize, string> = {
  sm: "size-4",
  md: "size-4",
  lg: "size-5",
};

/** Props consumed by Button itself and never forwarded to the DOM. */
const OWN_KEYS = [
  "variant",
  "size",
  "icon",
  "iconPosition",
  "fullWidth",
  "className",
  "children",
  "href",
] as const;

type OwnKey = (typeof OWN_KEYS)[number];

function omitOwn<T extends object>(props: T): Omit<T, OwnKey> {
  const rest = { ...props } as Record<string, unknown>;
  for (const key of OWN_KEYS) delete rest[key];
  return rest as unknown as Omit<T, OwnKey>;
}

function isLinkProps(props: ButtonProps): props is ButtonAsLinkProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon: Icon,
    iconPosition = "end",
    fullWidth = false,
    className,
    children,
  } = props;

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "start" && (
        <Icon aria-hidden="true" className={iconSizes[size]} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "end" && (
        <Icon aria-hidden="true" className={iconSizes[size]} />
      )}
    </>
  );

  if (isLinkProps(props)) {
    return (
      <a href={props.href} className={classes} {...omitOwn(props)}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = omitOwn(props);

  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
