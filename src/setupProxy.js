const { createProxyMiddleware } = require('http-proxy-middleware');
const env = require('../config/webpack.env');
module.exports = function(app) {
  app.use(
      createProxyMiddleware('/api', {
        target: env.proxy,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        },
      }))
};