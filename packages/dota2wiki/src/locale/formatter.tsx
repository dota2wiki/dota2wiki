import { SpecialItem } from '@dota2wiki/database';

const titleRegex: RegExp = /<strong>[^<\/?strong>]+<\/strong>/g;

/**
 * Format description
 */
export function formatDescriptionItem(
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
      `<span class="ca-value-wrapper${level ? ' is-level' : ''}">${item.value
        .map(
          (v, i) =>
            `<span class="ca-value${i + 1 === level ? ' is-active' : ''}">${v}</span>`,
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
  label: string,
  values: number[],
  format: 'int' | 'float' = 'float',
): { label: string; values: string[] } {
  const firstChar: string = label.substring(0, 1);
  const prefix: string = firstChar === '+' ? '+' : '';
  const unit: string = firstChar === '%' ? '%' : '';

  const valuesFormat: (value: number) => string =
    format === 'int'
      ? value => `${prefix}${Math.floor(value)}${unit}`
      : value => `${prefix}${value.toFixed(2)}${unit}`;

  return {
    label: prefix || unit ? label.substring(1) : label,
    values: values.map(valuesFormat),
  };
}
