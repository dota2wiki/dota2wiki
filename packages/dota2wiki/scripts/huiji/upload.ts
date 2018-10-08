import globby from 'globby';
import chalk from 'chalk';
import MWBot, { UploadResponse } from 'mwbot';
import { genPathResolve } from '@huiji/shared-utils';
import createBot from './bot';
import { FileInfo, genFileInfo } from './file-info';

const resolvePath: (...paths: string[]) => string = genPathResolve(__dirname, '../..');

/**
 * Upload files to huijiwiki
 */
async function upload(): Promise<void> {
  const bot: MWBot = await createBot();

  const allFilePaths: string[] = await globby(
    ['jpg', 'png', 'webm'].map(ext => resolvePath(`src/assets/**/*.${ext}`)),
  );

  allFilePaths.sort().reverse();

  for (const filePath of allFilePaths) {
    const fileInfo: FileInfo = await genFileInfo(filePath);
    try {
      const response: UploadResponse = await bot.upload(fileInfo.filename, filePath);

      if (
        response.upload.result === 'Success' &&
        response.upload.imageinfo.url === fileInfo.url
      ) {
        console.info(
          chalk.greenBright('Success'.padEnd(8, ' ')),
          fileInfo.url.replace(
            'https://huiji-public.huijistatic.com/dota2/uploads',
            '...',
          ),
        );
      } else if (response.upload.result === 'Warning') {
        console.info(
          chalk.yellowBright('Skip'.padEnd(8, ' ')),
          fileInfo.url.replace(
            'https://huiji-public.huijistatic.com/dota2/uploads',
            '...',
          ),
        );
      } else {
        console.info();
        console.info(fileInfo);
        console.info(response);
        console.info();
      }
    } catch (error) {
      console.error(chalk.redBright((error as Error).message));
      console.error((error as Error).stack);
      console.error(fileInfo);
    }
  }
}

upload();
