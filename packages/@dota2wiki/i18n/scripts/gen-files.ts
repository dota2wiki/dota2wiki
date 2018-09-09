// tslint:disable:no-any

import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as globby from 'globby';
import { load, save } from '@dota2wiki/vdf';
import chalk from 'chalk';

function resolve(...paths: string[]): string {
  return path.resolve(__dirname, ...paths);
}

interface Options {
  files: string[];
  output: string;
  includes: (string | RegExp)[];
  excludes: (string | RegExp)[];
}

let allLanguage: string[];

async function getAllLanguages(): Promise<string[]> {
  const files: string[] = await globby(resolve('assets/dota_*.txt'));

  const result: string[] = await Promise.all(
    files.map(f =>
      (async (): Promise<string> => {
        const raw: any = await load(f);

        return (raw.lang.Language as string).toLowerCase();
      })(),
    ),
  );

  result.sort();

  allLanguage = result;

  const content: string = result.map(lang => `'${lang}'`).join(', ');
  fs.writeFileSync(
    resolve('../src/languages.ts'),
    `// tslint:disable\n\nexport const allLanguages: string[] = [${content}]`,
  );

  return result;
}

/**
 * Generate Localization files
 */
async function generateLocale(options: Options): Promise<void> {
  const output: string = resolve(options.output);
  if (!fs.existsSync(output)) {
    mkdirp.sync(output);
  }

  const map: Record<string, Record<string, string>> = {};

  const allPromise: Promise<void>[] = [];

  allLanguage.forEach(lang =>
    options.files.forEach(f =>
      allPromise.push(
        (async () => {
          const raw: any = await load(
            resolve(`assets/${f}_${lang === 'korean' ? 'koreana' : lang}.txt`),
          );
          map[lang] = map[lang]
            ? {
                ...map[lang],
                ...raw.lang.Tokens,
              }
            : raw.lang.Tokens;
        })(),
      ),
    ),
  );

  await Promise.all(allPromise);

  await Promise.all(
    Object.entries(map).map(
      ([language, rawDict]): Promise<void> => {
        return (async () => {
          const dict: Record<string, string> = {};

          Object.entries(rawDict).forEach(([key, text]) => {
            for (const p of options.excludes) {
              if (typeof p === 'string') {
                if (p === key) {
                  return;
                }
              } else {
                if (p.test(key)) {
                  return;
                }
              }
            }
            for (const p of options.includes) {
              if (typeof p === 'string') {
                if (p === key) {
                  return (dict[key] = text);
                }
              } else {
                if (p.test(key)) {
                  return (dict[key] = text);
                }
              }
            }
          });

          const content: string = JSON.stringify(dict, undefined, '  ');

          fs.writeFileSync(
            `${output}/${language}.ts`,
            `// tslint:disable\n\nconst dict: Record<string, string> = ${content}\n\n export default dict`,
          );

          console.info(
            chalk.cyanBright('Output:'),
            chalk.greenBright(`${output}/${language}.ts`),
          );
        })();
      },
    ),
  );
}

const optionsList: Options[] = [
  {
    files: ['dota'],
    output: '../src/dota',
    includes: [/^npc_dota_hero_/, /^DOTA_Tooltip_ability_/],
    excludes: [],
  },
];

getAllLanguages()
  .then(result => console.info(result))
  .then(() => Promise.all(optionsList.map(generateLocale)))
  .catch(console.error);
