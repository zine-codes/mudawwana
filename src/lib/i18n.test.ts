import { describe, expect, it } from 'vitest';
import { pluralize } from './i18n';

describe('pluralize', () => {
  it('returns no-articles for zero', () => {
    expect(pluralize(0)).toBe('لا مقالات');
  });

  it('returns singular for one', () => {
    expect(pluralize(1)).toBe('مقال واحد');
  });

  it('returns dual for two', () => {
    expect(pluralize(2)).toBe('مقالان');
  });

  it('returns plural for 3-10', () => {
    expect(pluralize(3)).toBe('3 مقالات');
    expect(pluralize(10)).toBe('10 مقالات');
  });

  it('returns many for 11+', () => {
    expect(pluralize(11)).toBe('11 مقالًا');
    expect(pluralize(100)).toBe('100 مقالًا');
  });
});
