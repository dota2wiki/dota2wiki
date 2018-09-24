// tslint:disable:no-any

import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as globby from 'globby';
import chalk from 'chalk';
import * as database from '@dota2wiki/database';
import { load, save } from '@dota2wiki/vdf';

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

  allLanguage = [...new Set(['english', ...result])];

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
// tslint:disable-next-line:max-func-body-length
async function generateLocale(options: Options): Promise<void> {
  const output: string = resolve(options.output);
  if (!fs.existsSync(output)) {
    mkdirp.sync(output);
  }

  const map: Record<string, Record<string, string>> = {};
  async function loadVdf(filePrefix: string, language: string): Promise<void> {
    try {
      const filePath: string = resolve(
        `assets/${filePrefix}_${language === 'korean' ? 'koreana' : language}.txt`,
      );

      if (!fs.existsSync(filePath)) {
        return;
      }

      const raw: any = await load(filePath);

      const rawDict: Record<string, string> =
        filePrefix === 'hero_lore' ? raw.hero_lore : raw.lang.Tokens;
      map[language] = map[language]
        ? {
            ...map[language],
            ...rawDict,
          }
        : rawDict;
    } catch (error) {
      if (error) {
        console.error(chalk.redBright(`${filePrefix} ${language}`));
        throw error;
      }
    }
  }

  await Promise.all(
    allLanguage
      .map(lang => options.files.map(prefix => loadVdf(prefix, lang)))
      .reduce<Promise<void>[]>((result, cur) => {
        result.push(...cur);

        return result;
      }, []),
  );

  let englishDict: Record<string, string> = {};

  async function outputSrc(
    language: string,
    rawDict: Record<string, string>,
  ): Promise<void> {
    let dict: Record<string, string> = {};

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

    Object.entries(dict).forEach(([key, value]) => {
      if (typeof value !== 'string') {
        console.warn(chalk.yellowBright(`Non-String value: [${key}]: ${value}`));
        dict[key] = (value as any).toString();
      }
    });

    if (language === 'english') {
      englishDict = dict;
    } else {
      dict = {
        ...englishDict,
        ...dict,
      };
    }

    // resolve line breaking and color
    Object.entries(dict).forEach(
      ([key, value]) =>
        (dict[key] = value
          .replace(/(\\?\\n)|\n/g, '<br/>')
          .replace(/\\"/g, '"')
          .replace(/<font[ ]+color=['"]([#A-Fa-f\d]+)['"]/g, '<span style="color:$1"')
          .replace(/<\/font>/g, '</span>')
          .replace(/<h1>/g, '<strong>')
          .replace(/<\/h1>/g, '</strong>')),
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
  }

  await outputSrc('english', map['english']);
  await Promise.all(
    Object.entries(map)
      .filter(([lang]) => lang !== 'english')
      .map(
        ([language, rawDict]): Promise<void> => {
          return outputSrc(language, rawDict);
        },
      ),
  );
}

function flat(result: string[], cur: string[]): string[] {
  result.push(...cur);

  return result;
}

const optionsList: Options[] = [
  {
    files: ['dota', 'hero_lore', 'abilities'],
    output: '../src/dota',
    includes: [
      /^npc_dota_hero_/,

      /^DOTA_Hero_Selection_/,
      /^DOTA_HeroComplexity/,
      /^DOTA_HeroRole_/,
      /^DOTA_AttackCapability_/,
      /^DOTA_HUD_/,
      'dota_hero',
      'DOTA_Abilities',
      'DOTA_StatBranch_TooltipTitle',
      'dota_settings_help_tips_reset',

      /^DOTA_HeroGrid_/,
      /^DOTA_HeroStats_/,
      /^DOTA_HeroLoadout_/,
      /^DOTA_HeroGuide_/,
      /^DOTA_HeroGuideViewer_/,

      /^DOTA_Tooltip/,
      /^dota_ability_variable_/,

      /^DOTA_SHOP/,
    ],
    excludes: [/_cny_/, /_cny2015_/],
  },
];

getAllLanguages()
  .then(result => console.info(result))
  .then(() => Promise.all(optionsList.map(generateLocale)))
  .catch(console.error);
