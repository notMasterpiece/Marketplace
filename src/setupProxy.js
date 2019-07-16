const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(proxy('/api', {
      target: 'https://apiko-marketplace-api-2019.herokuapp.com/',
      pathRewrite: {
        '^/api': '', // rewrite path
      },
      changeOrigin: true,
    },
  ));

  app.use(proxy('/socket.io', {
      target: 'https://apiko-marketplace-api-2019.herokuapp.com/',
      changeOrigin: true,
      ws: true,
    },
  ));
};
