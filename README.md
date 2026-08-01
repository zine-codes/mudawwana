# مدونتي (placeholder)

مدونة عربية بسيطة ومجانية 100% مبنية بـ [Astro](https://astro.build) وتُستضاف على **Cloudflare Pages**.
هذا المشروع **قالب** — اكتب مقالاتك فقط وسيُنشر الموقع.

## قبل النشر: غيّر القيم الافتراضية

| تريد تغيير | عدّل في |
|---|---|
| اسم الموقع | `src/data/site.ts` و`public/manifest.webmanifest` |
| بريد التواصل | `src/data/site.ts` و`public/.well-known/security.txt` |
| رابط الموقع | `src/data/site.ts` و`astro.config.mjs` و`public/robots.txt` و`public/.well-known/security.txt` |
| إضافة الموقع للشاشة الرئيسية (أيقونة) | أيقونات PNG في `public/` (جرّدها من `public/icon.svg`، أو استبدلها) |

## بنية المشروع

```
src/
├── content/articles/        ← ملفات المقالات (اكتب مقالاتك هنا)
├── data/
│   ├── site.ts              ← اسم الموقع + بريد التواصل (غيّرها هنا)
│   └── categories.ts        ← تسمية التصنيفات وترتيبها (اختياري)
├── layouts/Layout.astro     ← الهيكل العام (ترويسة، فوتر، الوضع الليلي)
├── components/              ← مكوّنات (بطاقة مقال، بطاقة تصنيف)
├── pages/                   ← الصفحات (رئيسية، تصنيفات، مقال، 404، RSS)
├── styles/global.css        ← التنسيقات
└── content.config.ts        ← حقول المقال (العنوان، التصنيف، الرابط...)
```

## كيف تضيف مقالًا جديدًا؟

1. افتح المجلد `src/content/articles/` في مستودع GitHub.
2. اضغط **Add file ← Create new file**.
3. الصق هذا النموذج واملأه:

```markdown
---
title: "عنوان المقال"
description: "وصف قصير يظهر في نتائج البحث."
date: 2026-08-01
category: tools
url: "https://رابط-الأداة.com"
featured: true
---

اكتب محتوى المقال هنا...
```

الحقول:
- `title` (إلزامي): عنوان المقال.
- `description` (اختياري): وصف قصير يظهر في نتائج البحث وعند المشاركة.
- `date` (إلزامي): تاريخ النشر بصيغة `YYYY-MM-DD`.
- `category` (إلزامي): التصنيف — أي كلمة تريدها. أي تصنيف جديد يظهر تلقائيًا كتصنيف.
- `url` (اختياري): رابط الأداة — إن وُجد يظهر زر «زيارة الأداة».
- `featured` (اختياري): ضع `true` لظهور المقال في قسم «مميزة» بالرئيسية.

4. اضغط **Commit changes** (الزر الأخضر). سيُنشر الموقع تلقائيًا خلال دقيقة أو دقيقتين.

التعديل: اضغط أيقونة القلم في الملف ثم عدّل ثم Commit.
الحذف: اضغط أيقونة سلة المهملات ثم Commit.

## تعديلات سريعة

| تريد تغيير | عدّل في |
|---|---|
| التصنيفات / تسميتها / ترتيبها | `src/data/categories.ts` |
| إضافة الموقع للشاشة الرئيسية (أيقونة) | أيقونات PNG في `public/` (جرّدها من `public/icon.svg`، أو استبدلها) |

## النشر على Cloudflare Pages (خطة مجانية)

1. أنشئ حسابًا مجانيًا في https://github.com و https://dash.cloudflare.com
2. أنشئ مستودعًا جديدًا في GitHub (اسمه مثلًا `blog`)، وارفع هذا المشروع إليه.
3. في Cloudflare: القائمة ← **Workers & Pages ← Create ← Pages ← Connect to Git**.
4. اختر المستودع، ثم اضبط:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. اضغط **Save and Deploy**.
6. ستحصل على رابط مثل `https://blog-xxx.pages.dev`.

> ملاحظة: رابط `sitemap` في `public/robots.txt` والمجال في `astro.config.mjs` يحملان القيمة الافتراضية `placeholder.pages.dev` — غيّرهما بعد أول نشر ليطابقا رابطك الفعلي.

## أوامر التطوير (اختيارية — لا تحتاجها للنشر)

```bash
npm install        # تثبيت الاعتماديات
npm run dev        # معاينة محلية على http://localhost:4321
npm run check      # فحص الأنواع والأخطاء
npm test           # تشغيل الاختبارات
npm run build      # بناء الموقع في مجلد dist/
```
