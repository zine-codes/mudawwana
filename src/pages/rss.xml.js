import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { categoryLabel } from '../data/categories';

export async function GET(context) {
  const articles = (await getCollection('articles')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: `/${a.data.category}/${a.id}/`,
      categories: [categoryLabel(a.data.category)],
      author: site.email,
    })),
  });
}
