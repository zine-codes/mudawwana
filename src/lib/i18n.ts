export function pluralize(n: number): string {
  if (n === 0) return 'لا مقالات';
  if (n === 1) return 'مقال واحد';
  if (n === 2) return 'مقالان';
  if (n >= 3 && n <= 10) return `${n} مقالات`;
  return `${n} مقالًا`;
}
