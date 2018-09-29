/**
 * Generate files
 */
import { GenFilesOptions, genFiles } from '@huiji/shared-utils';
import { allLanguages } from '@dota2wiki/i18n';

const optionsList: GenFilesOptions[] = [
  // assets
  {
    patterns: [
      'src/assets/**/*',
      '!src/assets/all.ts',
      '!src/assets/index.ts',
      '!src/assets/all.scss',
      '!src/assets/index.scss',
    ],
    output: 'src/assets/all.ts',
    comments: ['All assets'],
    header: 'export default {',
    footer: '};',
    body: files => {
      const items: { key: string; path: string }[] = files.map(f => ({
        key: `'${f.path.replace(/^\.\//, '')}'`,
        path: f.path.replace(/^\.\//, '@src/assets/'),
      }));

      let maxLength: number = 0;
      items.forEach(
        item => (maxLength = maxLength < item.key.length ? item.key.length : maxLength),
      );

      return items
        .map(item => `  ${item.key.padEnd(maxLength, ' ')} : require('${item.path}'),`)
        .join('\n');
    },
  },
  {
    patterns: [
      'src/assets/**/*.png',
      'src/assets/**/*.jpg',
      '!src/assets/all.ts',
      '!src/assets/index.ts',
      '!src/assets/all.scss',
      '!src/assets/index.scss',
    ],
    output: 'src/assets/all.scss',
    comments: ['All assets'],
    header: '$assets-map: (',
    footer: ');',
    body: files => {
      const items: { key: string; path: string }[] = files.map(f => ({
        key: `'${f.path.replace(/^\.\//, '')}'`,
        path: f.path.replace(/^\.\//, '~@src/assets/'),
      }));

      let maxLength: number = 0;
      items.forEach(
        item => (maxLength = maxLength < item.key.length ? item.key.length : maxLength),
      );

      return items
        .map(item => `  ${item.key.padEnd(maxLength, ' ')} : url('${item.path}'),`)
        .join('\n');
    },
  },

  // controls and components
  {
    patterns: ['src/controls/**/*.(tsx|ts)'],
    output: 'src/controls/all.ts',
    comments: ['All controls.'],
  },
  {
    patterns: ['src/controls/**/*.scss'],
    output: 'src/controls/all.scss',
    comments: ['All controls style.'],
  },
  {
    patterns: ['src/components/**/*.scss'],
    output: 'src/components/all.scss',
    comments: ['All components style.'],
  },
  // sprites
  {
    patterns: ['src/sprites/**/*.scss'],
    output: 'src/sprites/all.scss',
    comments: ['All sprites.'],
  },
];

Promise.all([...optionsList].map(genFiles)).catch((e: Error) => {
  console.error(e.message);
  console.error(e.stack);
});
