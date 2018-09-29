const path = require('path');
const Config = require('webpack-chain');
const webpack = require('webpack');
const chalk = require('chalk');
const express = require('express');

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
    // config.module.noParse(
    //   /^(vue|vue-router|vuex|vuex-router-sync|@dota2wiki\/i18n\/dist\/esm\/dota\/[a-z]+)$/,
    // );
    // config.module.rule('js').exclude.add(filepath => /@dota2wiki/.test(filepath));

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
      app.use(
        `${options.baseUrl}${options.assetsDir}/i18n`,
        express.static('../@dota2wiki/i18n/src', {
          setHeaders: response =>
            response.setHeader('Content-Type', 'text/plain; charset=utf-8'),
        }),
      );
    },
  },

  parallel: true,
};

module.exports = options;
