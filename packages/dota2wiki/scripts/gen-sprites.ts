import * as fs from 'fs';
import * as ps from 'path';
import generateSprites, { SpritesOptions } from '@huiji/image/src/sprites';
import { heroGroups } from '@dota2wiki/database';

const context: string = ps.resolve(__dirname, '..');

function pathResolve(...paths: string[]): string {
  return ps.resolve(context, ...paths);
}

interface ScssOptions {
  files: string[];
  columns: number;
  itemWidth: number;
  itemHeight: number;
  selector: string;
  itemSelector(path: string): string;
  resourcesKey: string;
  outputScss: string;
}

async function generateScss({
  files,
  columns,
  itemWidth,
  itemHeight,
  selector,
  itemSelector,
  resourcesKey,
  outputScss,
}: ScssOptions): Promise<void> {
  const total: number = files.length;
  const cols: number = columns && columns < total ? columns : total;
  const rows: number = Math.floor(total / cols) + (total % cols > 0 ? 1 : 0);

  const content: string = `/**
 * Auto generated sprites.
 */

${selector} {
  $total:       ${files.length};
  $cols:        ${cols};
  $rows:        ${rows};
  $item-width:  ${itemWidth};
  $item-height: ${itemHeight};

  display: inline-block;
  font-size: rem($item-height);
  line-height: 1;
  vertical-align: middle;
  width: $item-width / $item-height * 1em;
  height: 1em;

  background-repeat: no-repeat;
  background-size: auto (1em * $rows);
  background-position-x: 1em;

  background-image: resources('${resourcesKey}');

  @each $index, $item-selector in (
${files.map((path, index) => `    ${index}: '.${itemSelector(path)}',`).join('\n')}
  ) {
    &#{$item-selector} {
      background-position-x: (-1em * $item-width / $item-height) * ($index % $cols);
      background-position-y: -1em * (floor(($index + 1) / $cols) - 1 + if(($index + 1) % $cols > 0, 1, 0));
    }
  }
}
`;

  return new Promise<void>((resolve, reject) => {
    fs.writeFile(outputScss, content, error => (error ? reject(error) : resolve()));
  });
}

/**
 * Options
 */
const optionsArray: (SpritesOptions & ScssOptions)[] = [
  ...heroGroups.map<SpritesOptions & ScssOptions>(group => {
    return {
      context,
      patterns: group.heroes.map<string>(
        hero => `src/assets/images/heroes/${hero.name}*.png`,
      ),
      columns: 16,

      itemWidth: 128,
      itemHeight: 72,
      outputImage: `src/assets/sprites/hero-avatar-h-${group.primary}.png`,

      files: [],
      selector: `.dt-hero-avatar-h.${group.primary}`,
      itemSelector: path => {
        const parts: string[] = path.split(/\/|\\/);

        return parts[parts.length - 1].replace(/_png\.png$/, '');
      },
      resourcesKey: `sprites/hero-avatar-h-${group.primary}.png`,
      outputScss: pathResolve(`src/sprites/hero-avatar-h-${group.primary}.scss`),
    };
  }),
  ...heroGroups.map<SpritesOptions & ScssOptions>(group => {
    return {
      context,
      patterns: group.heroes.map<string>(
        hero => `src/assets/images/heroes/selection/${hero.name}*.png`,
      ),
      columns: 16,

      itemWidth: 71,
      itemHeight: 94,
      outputImage: `src/assets/sprites/hero-avatar-v-${group.primary}.png`,

      files: [],
      selector: `.dt-hero-avatar-v.${group.primary}`,
      itemSelector: path => {
        const parts: string[] = path.split(/\/|\\/);

        return parts[parts.length - 1].replace(/_png\.png$/, '');
      },
      resourcesKey: `sprites/hero-avatar-v-${group.primary}.png`,
      outputScss: pathResolve(`src/sprites/hero-avatar-v-${group.primary}.scss`),
    };
  }),
];

optionsArray.forEach(options => {
  generateSprites(options)
    .then(files => {
      options.files = files;
      generateScss(options);
    })
    .catch(console.error);
});
