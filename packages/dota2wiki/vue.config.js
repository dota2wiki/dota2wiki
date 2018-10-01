const fs = require('fs');
const path = require('path');
const { genPathResolve } = require('@huiji/shared-utils');
const Config = require('webpack-chain');
const webpack = require('webpack');
const chalk = require('chalk');
const express = require('express');
const os = require('os');

console.log(chalk.cyanBright(`\nCPUs: ${os.cpus().length}\n`));

/**
 * @type {'gh-pages' | 'cloud' | 'huiji'}
 */
const platform = process.env.PLATFORM || 'gh-pages';

/**
 * @type {Record<'gh-pages' | 'cloud' | 'huiji', string>}
 */
const dictBaseUrl = {
  'gh-pages': '/',
  cloud: 'https://static.duduluu.com/dota2wiki.duduluu.com/',
  huiji: 'https://static.duduluu.com/dota2.huijiwiki.com/',
};

const options = {
  baseUrl: dictBaseUrl[platform],
  assetsDir: 'static',
  filenameHashing: true,

  /**
   * @param {Config} config
   */
  chainWebpack: config => {
    const context = config.store.get('context');
    const resolve = (...paths) => path.resolve(context, ...paths);
    const getAssetPath = require('@vue/cli-service/lib/util/getAssetPath');

    const isProd = process.env.NODE_ENV === 'production';
    const isLegacyBundle =
      process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD;

    const hashDigest = 'hex';
    const hashDigestLength = 128;
    const hashFunction = 'sha512';

    const inlineLimit = 32;

    // base --------------------------------------------------------

    config.resolve.symlinks(false);

    config.resolve.alias
      .delete('@')
      .set('@src', resolve('src'))
      .set('void-ui$', resolve('../void-ui/src/index.ts'));

    // js --------------------------------------------------------

    if (isProd) {
      const filename = getAssetPath(
        options,
        `js/[name]${isLegacyBundle ? '-legacy' : ''}${
          options.filenameHashing ? '.[contenthash]' : ''
        }.js`,
      );

      config.output
        .filename(filename)
        .chunkFilename(filename)
        .hashDigest(hashDigest)
        .hashDigestLength(hashDigestLength)
        .hashFunction(hashFunction);
    }

    // css

    if (isProd) {
      const filename = getAssetPath(
        options,
        `css/[name]${options.filenameHashing ? '.[contenthash]' : ''}.css`,
      );

      config.plugin('extract-css').tap(([opt]) => [
        {
          ...opt,
          filename: filename,
          chunkFilename: filename,
          hashDigest,
          hashDigestLength,
          hashFunction,
        },
      ]);
    }

    // static assets --------------------------------------------------------

    const genFileLoaderOptions = dir => ({
      name: getAssetPath(
        options,
        `${dir}/[name]${
          options.filenameHashing
            ? `.[${hashFunction}:hash:${hashDigest}:${hashDigestLength}]`
            : ''
        }.[ext]`,
      ),
    });

    [['images', 'img'], ['media', 'media'], ['fonts', 'fonts']].forEach(([rule, dir]) => {
      config.module
        .rule(rule)
        .use('url-loader')
        .loader('url-loader')
        .tap(opt => ({
          ...opt,
          ...{
            limit: inlineLimit,
            fallback: {
              loader: 'file-loader',
              options: genFileLoaderOptions(dir),
            },
          },
        }));
    });

    config.module
      .rule('svg')
      .use('file-loader')
      .loader('file-loader')
      .tap(opt => ({
        ...opt,
        ...genFileLoaderOptions('img'),
      }));
  },

  devServer: {
    host: '0.0.0.0',
    port: 8570,
    open: true,
    /**
     * @param {express.Application} app
     */
    before(app) {
      const resolveDict = genPathResolve(__dirname, '../@dota2wiki/i18n/src');

      const router = express.Router();
      router.get(
        `${options.baseUrl}${options.assetsDir}/i18n/:category/:file`,
        (request, response) => {
          const language = request.params.file.split('.')[0];
          const dictPath = resolveDict(request.params.category, `${language}.json5`);
          fs.exists(dictPath, exists => {
            if (exists) {
              fs.readFile(dictPath, { encoding: 'utf-8' }, (readFileError, content) => {
                if (readFileError) {
                  throw readFileError;
                }
                response.send(content);
              });
            } else {
              response.status(404).send('Dict Not Found');
            }
          });
        },
      );

      app.use(router);
    },
  },

  parallel: false,
};

module.exports = options;
