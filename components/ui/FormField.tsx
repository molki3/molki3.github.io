import type { ReactNode } from "react";
import type { InputProps, SelectProps, TextareaProps } from "@/types";
import { cn } from "@/lib/cn";

const controlStyles =
  "block w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:outline-none transition";

function controlTone(hasError: boolean): string {
  return hasError
    ? "ring-rose-300 focus:ring-rose-500"
    : "ring-slate-300 focus:ring-teal-600";
}

interface FieldShellProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
}

function FieldShell({ id, label, error, hint, optional, children }: FieldShellProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-slate-800">
        <span>{label}</span>
        {optional && <span className="text-xs font-normal text-slate-500">Optional</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-rose-600">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-xs text-slate-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function describedBy(id: string, error?: string, hint?: string): string | undefined {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}

export function Input({ label, name, error, hint, optional, className, ...rest }: InputProps) {
  const id = `field-${name}`;
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <input
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlStyles, controlTone(Boolean(error)), className)}
        {...rest}
      />
    </FieldShell>
  );
}

export function Textarea({
  label,
  name,
  error,
  hint,
  optional,
  className,
  rows = 5,
  ...rest
}: TextareaProps) {
  const id = `field-${name}`;
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <textarea
        id={id}
        name={name}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlStyles, "resize-y", controlTone(Boolean(error)), className)}
        {...rest}
      />
    </FieldShell>
  );
}

export function Select({
  label,
  name,
  error,
  hint,
  optional,
  options,
  placeholder,
  className,
  ...rest
}: SelectProps) {
  const id = `field-${name}`;
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <select
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlStyles, "appearance-auto pr-10", controlTone(Boolean(error)), className)}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
