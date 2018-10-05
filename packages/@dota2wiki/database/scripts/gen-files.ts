// tslint:disable:no-reference no-relative-imports no-any no-unsafe-any no-reserved-keywords
/**
 * Generate all data.
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { genPathResolve } from '@huiji/shared-utils';
import { save, load, EnumSpider } from '@dota2wiki/vdf';
import genHeroes from './heroes';
import genAbilities from './abilities';
import { Hero } from '../src/models/hero';

const resolvePath: (...paths: string[]) => string = genPathResolve(__dirname, '..');

const fileHeroes: string = resolvePath('scripts/assets/npc/npc_heroes.txt');
const fileAbilities: string = resolvePath('scripts/assets/npc/npc_abilities.txt');
const fileItems: string = resolvePath('scripts/assets/npc/items.txt');

const spider: EnumSpider = new EnumSpider(
  'Team',
  'AttackCapabilities',
  'AttributePrimary',
  'MovementCapabilities',
  'AbilityType',
  'AbilityBehavior',
  'AbilityUnitTargetTeam',
  'AbilityUnitTargetType',
  'AbilityUnitTargetFlags',
  'SpellImmunityType',
  'SpellDispellableType',
  'AbilityUnitDamageType',
  'ItemShareability',
);

function walkProps(dataArray: any[]): string[] {
  const props: Set<string> = new Set();

  dataArray.forEach(data =>
    Object.keys(data).forEach(p => p !== '__name' && props.add(p)),
  );

  return [...props];
}

function genYml(
  dict: Record<string, string[] | Set<string>>,
  extra?: Record<string, (name: string) => any>,
): string {
  return Object.entries(dict)
    .map<[string, string[]]>(
      ([name, props]) => (Array.isArray(props) ? [name, props] : [name, [...props]]),
    )
    .map(([name, props]) => {
      let subContent: string = '';

      // subContent += `==== ${name} ${props.length} ====\n`;
      subContent += `${name}:\n`;
      subContent += `  count: ${props.length}\n`;
      if (extra) {
        Object.entries(extra).forEach(
          ([key, fn]) => (subContent += `  ${key}: ${fn(name)}\n`),
        );
      }
      subContent += '  items:\n';
      subContent += props.map(p => `    - ${p}`).join('\n');
      subContent += '\n';

      return subContent;
    })
    .join('\n');
}

async function walk(): Promise<void> {
  const [
    { DOTAHeroes: heroes },
    { DOTAAbilities: abilities },
    { DOTAAbilities: items },
  ] = await Promise.all([load(fileHeroes), load(fileAbilities), load(fileItems)]);

  [heroes, abilities, items].forEach(dataRecord =>
    Object.entries(dataRecord).forEach(([name, data]) => {
      if (typeof data === 'object') {
        (data as any).__name = name;
      } else {
        console.info(chalk.yellowBright(`Invalid data: ${name}: ${data}`));
        delete dataRecord[name];
      }
    }),
  );

  const [rawHeroes, rawAbilities, rawItems] = [
    Object.values(heroes),
    Object.values(abilities),
    Object.values(items),
  ];

  [rawHeroes, rawAbilities, rawItems].forEach(dataArray =>
    dataArray.forEach(data => spider.walk(data)),
  );

  spider.print();

  const contentEnums: string = genYml(spider.map, {
    flag: name => (spider.flags[name] ? true : false),
  });

  const propsMap: Record<string, string[]> = {
    Hero: walkProps(rawHeroes),
    Ability: walkProps(
      rawAbilities.filter(
        (data: any) => !(data.__name as string).includes('special_bonus_'),
      ),
    ),
    Talent: walkProps(
      rawAbilities.filter((data: any) =>
        (data.__name as string).includes('special_bonus_'),
      ),
    ),
    Item: walkProps(rawItems.filter((data: any) => !data.ItemRecipe)),
    ItemRecipe: walkProps(rawItems.filter((data: any) => data.ItemRecipe)),
  };
  const contentProps: string = genYml(propsMap);

  await Promise.all(
    [
      ['scripts/assets/enums.yml', contentEnums],
      ['scripts/assets/props.yml', contentProps],
    ].map(
      ([file, content]) =>
        new Promise<void>((resolve, reject) => {
          fs.writeFile(resolvePath(file), content, error => {
            if (error) {
              return reject(error);
            }

            return resolve();
          });
        }),
    ),
  );
}

async function generate(): Promise<void> {
  const heroes: Record<string, Hero> = await genHeroes(fileHeroes);
  const [abilities, talents, items] = await genAbilities(
    heroes,
    fileAbilities,
    fileItems,
  );

  await Promise.all(
    ([
      [resolvePath('src/db/heroes.ts'), heroes],
      [resolvePath('src/db/abilities.ts'), abilities],
      [resolvePath('src/db/talents.ts'), talents],
      [resolvePath('src/db/items.ts'), items],
    ] as [string, any][]).map(async ([output, data]) => {
      try {
        await save(output, data);
      } catch (error) {
        console.error(error);
      } finally {
        console.info(chalk.cyanBright('Saved data to:'), chalk.greenBright(output));
      }
    }),
  );
}

Promise.all([walk(), generate()]).catch(console.error);
