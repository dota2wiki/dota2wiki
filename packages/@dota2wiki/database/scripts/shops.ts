import fs from 'fs';
import chalk from 'chalk';
import {
  load,
  save,
  ValveData,
  TypeMap,
  EnumSpider,
  toArray,
  toBoolean,
  toNumberArray,
  toStringArray,
} from '@dota2wiki/vdf';

/**
 * Generate shops data
 */
export default async function genShops(
  pathShopTags: string,
  pathShops: string,
): Promise<Record<string, string[]>> {
  const [{ item_categories: itemCategories }, dotaShopsContent] = await Promise.all([
    load(pathShopTags),
    new Promise<string>((resolve, reject) =>
      fs.readFile(
        pathShops,
        { encoding: 'utf-8' },
        (error, content) => (error ? reject(error) : resolve(content)),
      ),
    ),
  ]);

  const shops: Record<string, string[]> = {};
  let currentCategory: string = '';
  dotaShopsContent
    .split(/[\n\r]+/)
    .filter(l => !!l)
    .map(l => l.trim())
    .forEach(line => {
      if (/"dota_shops"|{|}/.test(line)) {
        return;
      }
      if (line.startsWith('"item"')) {
        const item: string = line.split(/[\ \t]+/)[1].replace(/"/g, '');
        (shops[currentCategory] || (shops[currentCategory] = [])).push(item);
      } else {
        currentCategory = line.replace(/"/g, '');
      }
    });

  return shops;
}
