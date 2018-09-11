/**
 * Convert a number to percentage text.
 * @param value raw value
 * @param digits digits of decimal
 */
export function toPercentage(value: number, digits: number = 2): string {
  return `${(value * 100).toFixed(digits)}%`;
}
