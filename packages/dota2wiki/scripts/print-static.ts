/**
 * Print all static files
 */
import globby from 'globby';
import fs from 'fs';

globby(['js', 'css', 'png', 'jpg', 'webm'].map(ext => `dist/static/**/*.${ext}`)).then(
  files => {
    const content: string = files
      .map(f => f.replace('dist/', 'https://static.duduluu.com/dota2wiki.duduluu.com/'))
      .join('\n');

    fs.writeFile('.tmp.static.txt', content, error => error && console.error(error));
  },
);
