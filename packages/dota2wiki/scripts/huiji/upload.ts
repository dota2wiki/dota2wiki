import globby from 'globby';
import chalk from 'chalk';
import MWBot, { UploadResponse } from 'mwbot';
import { genPathResolve } from '@huiji/shared-utils';
import { createBot, queue } from './bot';
import { FileInfo, genFileInfo } from './file-info';
import * as fs from 'fs';

const resolvePath: (...paths: string[]) => string = genPathResolve(__dirname, '../..');

let bot: MWBot;

/**
 * Upload files to huijiwiki
 */
async function upload(fileInfo: FileInfo): Promise<UploadResponse | Error | undefined> {
  let response: UploadResponse | undefined;
  let error: Error | undefined;

  for (let index: number = 0; index < 2; index++) {
    try {
      response = await bot.upload(fileInfo.filename, fileInfo.filePath);

      break;
    } catch (rawError) {
      error = rawError;
      console.error(chalk.redBright((rawError as Error).message));
      console.error((rawError as Error).stack);
      console.error(fileInfo);
    }
  }

  if (response) {
    if (
      response.upload.result === 'Success' &&
      response.upload.imageinfo.url === fileInfo.url
    ) {
      console.info(
        chalk.greenBright('Success'.padEnd(8, ' ')),
        fileInfo.url.replace('https://huiji-public.huijistatic.com/dota2/uploads', '...'),
      );
    } else if (response.upload.result === 'Warning') {
      console.info(
        chalk.yellowBright('Skip'.padEnd(8, ' ')),
        fileInfo.url.replace('https://huiji-public.huijistatic.com/dota2/uploads', '...'),
      );
    } else {
      console.warn();
      console.warn(chalk.yellowBright('Warning'.padEnd(8, ' ')));
      console.warn(fileInfo);
      console.warn(response);
      console.warn();
    }
  }

  return response || error;
}

async function uploadAll(): Promise<void> {
  bot = await createBot();

  const allFilePaths: string[] = await globby(
    ['jpg', 'png', 'webm'].map(ext => resolvePath(`src/assets/**/*.${ext}`)),
  );

  const allFiles: FileInfo[] = await Promise.all(
    allFilePaths
      .sort()
      .reverse()
      .map(p => genFileInfo(p)),
  );

  const assetsPath: string = resolvePath('src/assets');
  const ts: string = `// tslint:disable\nexport default {\n${allFiles
    .map(f => `'${f.filePath.replace(assetsPath, '').substring(1)}': '${f.url}',\n`)
    .join('')}}\n`;
  const scss: string = `$assets-map: (\n${allFiles
    .filter(f => !f.filePath.endsWith('webm'))
    .map(f => `'${f.filePath.replace(assetsPath, '').substring(1)}': url('${f.url}'),\n`)
    .join('')})\n`;

  fs.writeFile(
    resolvePath('src/assets/all-hj.ts'),
    ts,
    error => error && console.error(error),
  );
  fs.writeFile(
    resolvePath('src/assets/all-hj.scss'),
    scss,
    error => error && console.error(error),
  );

  console.info(allFiles.map(f => f.filePath).join('\n'));
  console.info(chalk.greenBright('Files:'), chalk.cyanBright(allFiles.length.toString()));
  console.info();

  const result: (UploadResponse | Error | undefined)[] = await queue(allFiles, 6, upload);
  console.info(
    chalk.greenBright('Complete:'),
    chalk.cyanBright(result.length.toString()),
  );
}

uploadAll();
