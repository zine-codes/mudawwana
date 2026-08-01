// التصنيفات وترتيب ظهورها.
// لتغيير ترتيب تصنيف أو تسميته: عدّل هذا الملف فقط.
// أي تصنيف جديد تكتبه في أي مقال سيظهر تلقائيًا حتى لو لم يُذكر هنا.
export interface Category {
  slug: string;
  label: string;
}

export const categories: readonly Category[] = [];

export function categoryLabel(slug: string): string {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}
