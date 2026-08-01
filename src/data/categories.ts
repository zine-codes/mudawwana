// قائمة اختيارية لتسمية التصنيفات وتحديد ترتيب ظهورها.
// اتركها فارغة لتعمل المدونة بأي تصنيف تكتبه في المقالات تلقائيًا.
// لتخصيص تسمية تصنيف أو ترتيبه أضِف سطرًا مثل:
// { slug: 'tools', label: 'أدوات' }
export interface Category {
  slug: string;
  label: string;
}

export const categories: readonly Category[] = [];

export function categoryLabel(slug: string): string {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}

interface ArticleLike {
  data: { category: string };
}

/** التصنيفات الفعلية التي تحتوي مقالات: المعرّفة في الإعداد بالترتيب المحدد + أي تصنيف جديد من المقالات */
export function activeCategories(
  allArticles: readonly ArticleLike[],
  categoriesList: readonly Category[] = categories
): Category[] {
  const present = new Set(allArticles.map((a) => a.data.category));
  const known = categoriesList.filter((c) => present.has(c.slug));
  const extras = [...present]
    .filter((s) => !categoriesList.some((c) => c.slug === s))
    .sort()
    .map((slug) => ({ slug, label: slug }));
  return [...known, ...extras];
}
