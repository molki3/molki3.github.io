/**
 * Joins conditional class names into a single string.
 * Falsy values are discarded, so `cn("a", cond && "b")` is safe.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
