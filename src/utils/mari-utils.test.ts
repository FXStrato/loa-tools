import { expect, test } from 'vitest';
import { generateMariTable } from './mari-utils';

test('generateMariTable generates a full table with expected properties', () => {
  const table = generateMariTable(1000);
  table.forEach((item) => {
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('crystalPrice');
    expect(item).toHaveProperty('goldPrice');
    expect(item).toHaveProperty('icon');
  });
});
