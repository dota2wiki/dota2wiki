// tslint:disable:no-any no-unsafe-any

/**
 * Test
 */
import fs from 'fs';
import crypto from 'crypto';
import MWBot from 'mwbot';
import { genPathResolve } from '@huiji/shared-utils';
import Bot from 'nodemw';
import { genFileInfo, FileInfo } from './file-info';

const resolvePath: (...paths: string[]) => string = genPathResolve(__dirname, '../..');

const username: string = process.argv[2];
const password: string = process.argv[3];

const testFilePath: string = resolvePath('src/assets/sprites/hero-icon.png');

// console.info(`\nusername: ${username}\npassword: ${password}\n`);

async function test(): Promise<void> {
  const bot: MWBot = new MWBot({
    apiUrl: 'https://dota2.huijiwiki.com/api.php',
  });

  await bot.loginGetEditToken({
    username,
    password,
  });

  const fileInfo: FileInfo = await genFileInfo(testFilePath);

  const response = await bot.uploadOverwrite(fileInfo.filename, testFilePath);
  console.log(response);
  console.log(response.upload.warnings.duplicate);
  console.log(response.upload.warnings.nochange);

  console.log(fileInfo);
  console.log(response.upload.imageinfo.url);
}

test();
