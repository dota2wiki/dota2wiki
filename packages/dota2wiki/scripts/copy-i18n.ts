/**
 * Copy all localization dicts to dist directory.
 */
import fs from 'fs';
import { genPathResolve } from '@huiji/shared-utils';
import { dota } from '@dota2wiki/i18n';
import mkdirp from 'mkdirp';
// ../@dota2wiki/i18n/src/dota

const resolve: (...paths: string[]) => string = genPathResolve(__dirname, '..');

mkdirp.sync(resolve('dist/static/i18n/dota/'));

Object.entries(dota).forEach(([language, hash]) => {
  fs.copyFile(
    resolve(`../@dota2wiki/i18n/src/dota/${language}.json5`),
    resolve(`dist/static/i18n/dota/${language}.${hash}.json5`),
    error => {
      if (error) {
        throw error;
      }
    },
  );
});
