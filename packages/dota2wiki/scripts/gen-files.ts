import * as p from 'path';
import * as fs from 'fs';
import * as globby from 'globby';
import * as mkdirp from 'mkdirp';
import chalk from 'chalk';
const labelLength: number = 20;

type Resolver = (path: string, name: string, ext: string) => string;

interface FileInfo {
  path: string;
  name: string;
  ext: string;
}

interface GenerateOptions {
  patterns: string | string[];
  output: string;
  comments?: string[];
  header?: string;
  footer?: string;
  body?(files: FileInfo[]): string;
  item?(info: FileInfo): string;
}

/**
 * Replace the matching part with alias in the path.
 * @param path the path
 */
function resolvePath(path: string, output: string): string {
  return path.replace(p.dirname(output), '.');
}

/**
 * Use files paths to generate export/import statements.
 */
function scriptResolve({ path, name, ext }: FileInfo): string {
  switch (ext) {
    case '.vue':
      return `export { default as ${name} } from '${path}';`;

    case '.ts':
    case '.tsx':
    case '.js':
    case '.jsx':
      return `export * from '${path.replace(/\.(j|t)sx?$/, '')}';`;

    default:
      throw new Error(`Cannot import ${ext} file (${path}) in .ts file.`);
  }
}

/**
 * Use files paths to generate export/import statements.
 */
function styleResolve({ path, name, ext }: FileInfo): string {
  switch (ext) {
    case '.scss':
    case '.less':
    case '.css':
      return `@import '${path.replace(/\.(scss|less)$/, '')}';`;

    default:
      throw new Error(`Cannot import ${ext} file (${path}) in scss/less/css file.`);
  }
}

function generateComments(comments: string[], jsdoc: boolean = true): string {
  return jsdoc
    ? ['/**', ...comments.map(c => ` * ${c}`), ' */'].join('\n')
    : comments.map(c => `// ${c}`).join('\n');
}

const banner: string = generateComments(
  [
    'Do not edit this file.',
    'It is auto generated by script "scripts/gen-files.ts".',
    'To update this file, please run command `yarn gen-files`.',
    'tslint:disable',
  ],
  false,
);

/**
 * Auto generate source code
 */
async function generateFiles(options: GenerateOptions): Promise<void> {
  let body: string;
  const files: FileInfo[] = (await globby([
    ...(Array.isArray(options.patterns) ? options.patterns : [options.patterns]),
    `!${options.output}`,
  ]))
    .sort()
    .map(f => ({
      path: resolvePath(f, options.output),
      name: p.basename(f).replace(/\.[A-Za-z0-9\-\_]+/, ''),
      ext: p.extname(f),
    }));

  if (files.length === 0) {
    return console.info(
      chalk.bgYellow.black(' Files No Found '.padEnd(labelLength, ' ')),
      chalk.green(options.output),
    );
  }

  if (options.body) {
    body = options.body(files);
  } else if (options.item) {
    body = files.map(options.item).join('\n');
  } else if (/\.(j|t)sx?$/.test(options.output)) {
    body = files.map(scriptResolve).join('\n');
  } else if (/\.(scss|less|css)$/.test(options.output)) {
    body = files.map(styleResolve).join('\n');
  } else {
    throw new Error(
      `
Cannot generate "${options.output}",
${p.extname(options.output)} file is not default supported,
please provide a resolver function.
`,
    );
  }

  const content: string = [
    banner,
    '\n\n',
    ...(options.comments && options.comments.length > 0
      ? [generateComments(options.comments), '\n\n']
      : []),
    ...(options.header ? [options.header, '\n'] : []),
    body,
    ...(options.footer ? ['\n', options.footer] : []),
    '\n',
  ].join('');

  return new Promise<void>((resolve, reject) => {
    const dir: string = p.dirname(options.output);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
    if (!fs.existsSync(options.output)) {
      fs.writeFileSync(options.output, '');
    }

    fs.readFile(options.output, 'utf-8', (readError, oldContent) => {
      if (readError) {
        return reject(readError);
      }
      if (content === oldContent) {
        console.info(
          chalk.bgCyan.black(' Nothing Changed '.padEnd(labelLength, ' ')),
          chalk.green(options.output),
        );

        return resolve();
      }

      fs.writeFile(options.output, content, writeError => {
        if (writeError) {
          return reject(writeError);
        }
        console.info(
          chalk.bgCyanBright.black(' File Updated '.padEnd(labelLength, ' ')),
          chalk.greenBright(options.output),
        );

        return resolve();
      });
    });
  });
}

const optionsList: GenerateOptions[] = [
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
        path: f.path,
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
        path: f.path.replace(/^\.\//, './assets/'),
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

Promise.all([...optionsList].map(generateFiles)).catch((e: Error) => {
  console.error(e.message);
  console.error(e.stack);
});
