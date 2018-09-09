const path = require('path');

module.exports = {
  chainWebpack(config) {
    const context = config.store.get('context');
    const resolve = (...paths) => path.resolve(context, ...paths);
    config.resolve.alias.delete('@').set('@src', resolve('src'));
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
