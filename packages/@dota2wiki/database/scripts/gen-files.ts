// tslint:disable:no-reference no-relative-imports no-any no-unsafe-any no-reserved-keywords
/**
 * Generate all data.
 */

import * as fs from 'fs';
import * as path from 'path';
import genHeroes from './heroes';
import genAbilities from './abilities';
import { Ability } from '../src/models/ability';
import { Hero } from '../src/models/hero';
import { save } from '@dota2wiki/vdf';
import chalk from 'chalk';

function resolve(...paths: string[]): string {
  return path.resolve(__dirname, ...paths);
}

async function generate(): Promise<void> {
  const heroes: Record<string, Hero> = await genHeroes(
    resolve('./assets/npc_heroes.txt'),
  );
  const abilities: Record<string, Ability> = await genAbilities(
    resolve('./assets/npc_abilities.txt'),
    heroes,
  );

  await Promise.all(
    ([
      [resolve('../src/db/heroes.ts'), heroes],
      [resolve('../src/db/abilities.ts'), abilities],
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

generate().catch(console.error);
