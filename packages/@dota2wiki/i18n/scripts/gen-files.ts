// tslint:disable:no-any

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import mkdirp from 'mkdirp';
import globby from 'globby';
import chalk from 'chalk';
import JSON5 from 'json5';
import * as database from '@dota2wiki/database';
import { load, save } from '@dota2wiki/vdf';
import { allLanguages } from '../src/languages';

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
    allLanguages
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
  ): Promise<string> {
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

    const content: string = JSON5.stringify(dict);

    fs.writeFileSync(`${output}/${language}.json5`, content);

    console.info(
      chalk.cyanBright('Output:'),
      chalk.greenBright(`${output}/${language}.ts`),
    );

    const hash: string = crypto
      .createHash('sha512')
      .update(content)
      .digest('hex');
    console.info(hash);

    return hash;
  }

  const temp: [string, string][] = [];
  temp.push(['english', await outputSrc('english', map['english'])]);
  await Promise.all(
    Object.entries(map)
      .filter(([lang]) => lang !== 'english')
      .map(async ([language, rawDict]) => {
        temp.push([language, await outputSrc(language, rawDict)]);
      }),
  );

  const manifest: Record<string, string> = {};
  temp
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .forEach(([language, hash]) => (manifest[language] = hash));
  fs.writeFileSync(
    resolve(`${output}/index.ts`),
    `// tslint:disable\n\nexport default ${JSON.stringify(manifest, undefined, '  ')};\n`,
  );
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

      /^DOTA_HeroGrid_/,
      /^DOTA_HeroStats_/,
      /^DOTA_HeroLoadout_/,
      /^DOTA_HeroGuide_/,
      /^DOTA_HeroGuideViewer_/,

      /^DOTA_Tooltip/,
      /^dota_ability_variable_/,

      /^DOTA_SHOP/,

      'dota_settings_game',
      'dota_settings_audio',
      'dota_settings_video',

      'dota_radiant',
      'dota_dire',

      'UI_Ultimate',
      'dota_hero',
      'DOTA_Abilities',
      'DOTA_LevelUp',
      'DOTA_LevelUp_Req',

      'DOTA_StatBranch_TooltipTitle',

      'dota_settings_help_tips_reset',
    ],
    excludes: [/_cny_/, /_cny2015_/],
  },
];

Promise.all(optionsList.map(generateLocale)).catch(console.error);
