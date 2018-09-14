const path = require('path');

module.exports = {
  chainWebpack(config) {
    config.resolve.symlinks(false);

    const context = config.store.get('context');
    const resolve = (...paths) => path.resolve(context, ...paths);

    config.resolve.alias
      .delete('@')
      .set('@src', resolve('src'))
      .set('void-ui$', resolve('void-ui/void-ui.ts'));
  },

  devServer: {
    host: '0.0.0.0',
    port: 8570,
    open: true,
    /**
     * @param {express.Application} app
     */
    before(app) {
      //
    },
  },
};
