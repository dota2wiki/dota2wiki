/**
 * Purge CDN
 */

import globby from 'globby';
import axios from 'axios';
import chalk from 'chalk';

globby('dist/static/**/*').then(async filePaths => {
  filePaths.sort();

  const failed: string[] = [];

  for (const file of filePaths) {
    const url: string = file.replace(
      'dist/',
      'https://static.duduluu.com/dota2wiki.duduluu.com/',
    );
    for (let count: number = 0; count < 5; count++) {
      try {
        await axios.get(url, {
          timeout: 5000,
        });
        console.info(chalk.greenBright(`Success to purge: ${file}`));
        break;
      } catch (error) {
        //
      }
      failed.push(file);
      console.info(chalk.redBright(`Failed to purge: ${file}`));
    }
  }

  console.info(chalk.redBright('Failed'));
  console.info(failed.join('\n'));
});
