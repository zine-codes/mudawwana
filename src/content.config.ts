import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    // عنوان المقال (يظهر في الصفحة وفي نتائج البحث)
    title: z.string(),
    // وصف قصير للمقال (يظهر في نتائج البحث وعند المشاركة)
    description: z.string().optional(),
    // تاريخ النشر بصيغة YYYY-MM-DD
    date: z.coerce.date(),
    // التصنيف: اكتب أي كلمة وتظهر كتصنيف (مثال: tools، quotes، articles)
    category: z.string(),
    // رابط الأداة (اختياري): إن وُجد يظهر زر «زيارة الأداة»
    url: z.string().url().optional(),
    // مميّز (اختياري): true = يظهر في قسم «مميزة» في الرئيسية
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { articles };
