/**
 * Generate static page files
 */

import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import chalk from 'chalk';
import pathResolve from './path-resolve';
import { allLanguages } from '@dota2wiki/i18n';
import { heroList } from '@dota2wiki/database';

async function generatePages(): Promise<void> {
  const indexPath: string = pathResolve('dist/index.html');
  const directories: string[] = [];

  function add(...paths: string[]): void {
    directories.push(pathResolve('dist', 'wiki', ...paths));
  }

  allLanguages.forEach(language => {
    function addPath(...paths: string[]): void {
      add(language, ...paths);
    }

    // home
    addPath('');

    addPath('heroes');
    heroList.forEach(hero => {
      addPath('hero', hero.name);
      hero.abilities.forEach(ability => {
        addPath('hero', hero.name, 'ability', ability);
      });
    });

    addPath('items');
  });

  let count: number = 0;
  await new Promise((resolve, reject) => {
    directories.forEach(dir => {
      mkdirp(dir, mkdirpError => {
        if (mkdirpError) {
          return reject(mkdirpError);
        }
        fs.copyFile(indexPath, path.resolve(dir, 'index.html'), copyFileError => {
          if (copyFileError) {
            return reject(copyFileError);
          }
          count++;
          if (count >= directories.length) {
            return resolve();
          }
        });
      });
    });
  });

  console.info(chalk.cyanBright(`\nGenerated ${directories.length} pages.\n`));
}

generatePages().catch(console.error);
