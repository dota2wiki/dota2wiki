/**
 * Make the first character to upper case.
 */
export function capitalize(text: string): string {
  if (!text) {
    return text;
  }

  return text[0].toUpperCase() + text.substring(1);
}
