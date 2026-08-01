import { describe, expect, it } from 'vitest';
import { activeCategories } from './categories';

const article = (category: string) => ({ data: { category } });

const CONFIG = [
  { slug: 'articles', label: 'مقالات' },
  { slug: 'tools', label: 'أدوات' },
];

describe('activeCategories', () => {
  it('returns an empty list for no articles', () => {
    expect(activeCategories([])).toEqual([]);
  });

  it('returns unknown categories sorted alphabetically', () => {
    expect(activeCategories([article('tools'), article('quotes')])).toEqual([
      { slug: 'quotes', label: 'quotes' },
      { slug: 'tools', label: 'tools' },
    ]);
  });

  it('deduplicates categories present in many articles', () => {
    expect(
      activeCategories([article('a'), article('a'), article('b')])
    ).toEqual([
      { slug: 'a', label: 'a' },
      { slug: 'b', label: 'b' },
    ]);
  });

  it('uses configured labels and keeps their order first', () => {
    expect(
      activeCategories([article('z'), article('articles'), article('tools')], CONFIG)
    ).toEqual([
      { slug: 'articles', label: 'مقالات' },
      { slug: 'tools', label: 'أدوات' },
      { slug: 'z', label: 'z' },
    ]);
  });

  it('ignores configured categories that have no articles', () => {
    expect(activeCategories([article('tools')], CONFIG)).toEqual([
      { slug: 'tools', label: 'أدوات' },
    ]);
  });
});
