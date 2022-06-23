module.exports = {
  resolver: {
    // Hack to serve index.html
    assetExts: ["html"]
  },
  transformer: {
    // For the Flow code in WebHMRClient.js
    babelTransformerPath: require.resolve(
      "metro-react-native-babel-transformer"
    )
  },
  server: {
    // CodeSandbox opens '/' on launch, so redirect that to something interesting.
    enhanceMiddleware: (middleware, server) => {
      return (req, res, next) => {
        if (req.url === "/") {
          res
            .writeHead(302, {
              Location: "/assets/index.html"
            })
            .end();
          return;
        }
        return middleware(req, res, next);
      };
    }
  }
};
