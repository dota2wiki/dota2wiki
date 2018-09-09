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

/**
 * Generate Localization files
 */
async function generateLocale(options: Options): Promise<void> {
  const output: string = resolve(options.output);
  if (!fs.existsSync(output)) {
    mkdirp.sync(output);
  }

  const allFiles: string[] = await globby(
    options.files.map(f => resolve(`assets/${f}_*.txt`)),
  );
  allFiles.sort();

  const map: Record<string, string[]> = {};
  allFiles.forEach(f => {
    const parts: string[] = f
      .replace(resolve('assets'), '')
      .replace('.txt', '')
      .split(/[_\/]/);
    const language: string = parts[parts.length - 1];
    (map[language] || (map[language] = [])).push(f);
  });

  await Promise.all(
    Object.entries(map).map(
      ([language, files]): Promise<void> => {
        return (async () => {
          const dict: Record<string, string> = {};

          // tslint:disable-next-line:no-any
          const raws: any[] = await Promise.all(files.map(f => load(f)));

          raws.forEach(raw =>
            Object.entries(raw.lang.Tokens as Record<string, string>).forEach(
              ([key, content]) => {
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
                      return (dict[key] = content);
                    }
                  } else {
                    if (p.test(key)) {
                      return (dict[key] = content);
                    }
                  }
                }
              },
            ),
          );

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

Promise.all(optionsList.map(generateLocale)).catch(console.error);
