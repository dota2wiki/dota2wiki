import { SpecialItem } from '@dota2wiki/database';

const titleRegex: RegExp = /<strong>[^<\/?strong>]+<\/strong>/g;

/**
 * Format description
 */
export function formatDescription(
  description: string,
  special: SpecialItem[],
  level: number = 0,
): { title: string; content: string }[] {
  if (!description) {
    return [];
  }

  let inter: string = description;

  special.forEach(item => {
    inter = inter.replace(
      new RegExp(`%${item.key}%`, 'g'),
      `<span class="ca-value-wrapper">${item.value
        .map(
          (v, i) =>
            `<span class="ca-value${
              !level || i + 1 === level ? ' is-active' : ''
            }">${v}</span>`,
        )
        .join('<i class="ca-divider">/</i>')}</span>`,
    );
  });

  inter = inter.replace(/%%/g, '<i class="ca-percent">%</i>');

  const contents: string[] = inter.split(titleRegex).filter(s => !!s);

  const titleMatches: RegExpMatchArray | null = inter.match(titleRegex);

  return contents.map((content, index) => ({
    title: titleMatches ? (titleMatches[index] || '').replace(/<\/?strong>/g, '') : '',
    content,
  }));
}

/**
 * Format special items
 */
export function formatValues(
  key: string,
  value: number[],
  format: 'int' | 'float' = 'float',
): { key: string; value: string[] }[] {
  return [];
}
