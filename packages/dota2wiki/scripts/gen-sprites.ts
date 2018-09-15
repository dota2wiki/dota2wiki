import * as fs from 'fs';
import * as ps from 'path';
import generateSprites, { SpritesOptions } from '@huiji/image/src/sprites';
import { heroGroups, heroList } from '@dota2wiki/database';

interface ScssOptions {
  context: string;
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
  context,
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
${files.map((path, index) => `    ${index}: '${itemSelector(path)}',`).join('\n')}
  ) {
    &#{$item-selector} {
      background-position-x: (-1em * $item-width / $item-height) * ($index % $cols);
      background-position-y: -1em * (floor(($index + 1) / $cols) - 1 + if(($index + 1) % $cols > 0, 1, 0));
    }
  }
}
`;

  return new Promise<void>((resolve, reject) => {
    fs.writeFile(
      ps.resolve(context, outputScss),
      content,
      error => (error ? reject(error) : resolve()),
    );
  });
}

type CombineOptions = SpritesOptions & ScssOptions;

const context: string = ps.resolve(__dirname, '..');

/**
 * Options
 */
const optionsArray: (CombineOptions)[] = [
  // hero avatars horizontal
  ...heroGroups.map<CombineOptions>(group => {
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

        return `.${parts[parts.length - 1].replace(/_png\.png$/, '')}`;
      },
      resourcesKey: `sprites/hero-avatar-h-${group.primary}.png`,
      outputScss: `src/sprites/hero-avatar-h-${group.primary}.scss`,
    };
  }),
  // hero avatars vertical
  ...heroGroups.map<CombineOptions>(group => {
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

        return `.${parts[parts.length - 1].replace(/_png\.png$/, '')}`;
      },
      resourcesKey: `sprites/hero-avatar-v-${group.primary}.png`,
      outputScss: `src/sprites/hero-avatar-v-${group.primary}.scss`,
    };
  }),
  // hero icons
  {
    context,
    patterns: ['src/assets/images/heroes/icons/*.png'],
    columns: 16,

    itemWidth: 32,
    itemHeight: 32,
    outputImage: 'src/assets/sprites/hero-icon.png',

    files: [],
    selector: '.dt-hero-icon',
    itemSelector: path => {
      const parts: string[] = path.split(/\/|\\/);

      return `.${parts[parts.length - 1].replace(/_png\.png$/, '')}`;
    },
    resourcesKey: 'sprites/hero-icon.png',
    outputScss: 'src/sprites/hero-icon.scss',
  },
  // spell icons
  ...heroList.map<CombineOptions>(hero => {
    const heroName: string = hero.name.replace('npc_dota_hero_', '');

    return {
      context,
      patterns: [
        `src/assets/images/spellicons/${heroName}_*.png`,
        `src/assets/images/spellicons/${heroName}/**/*.png`,
      ],
      columns: 0,

      itemWidth: 128,
      itemHeight: 128,
      outputImage: `src/assets/sprites/spell-icon-${heroName}.png`,

      files: [],
      selector: `.dt-spell-icon.${hero.name}`,
      itemSelector: path => {
        const parts: string[] = path.replace(/.+spellicons\//, '').split(/\/|\\/);
        let itemSelector: string = '';

        if (parts.length > 1) {
          itemSelector += '.';
          itemSelector += parts[parts.length - 2];
        }

        itemSelector += '.';
        itemSelector += parts[parts.length - 1].replace(`${heroName}_`, '');

        return itemSelector.replace(/\_png.png/, '');
      },
      resourcesKey: `sprites/spell-icon-${heroName}.png`,
      outputScss: `src/sprites/spell-icon-${heroName}.scss`,
    };
  }),
];

(async () => {
  for (const options of optionsArray) {
    await generateSprites(options)
      .then(files => {
        options.files = files;
        generateScss(options);
      })
      .catch(console.error);
  }
})();
