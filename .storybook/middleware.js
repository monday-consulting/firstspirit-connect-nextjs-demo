const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function expressMiddleware(router) {
  router.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8888",
      changeOrigin: true,
    })
  );
};
