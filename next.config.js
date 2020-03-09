const withLessExcludeAntd = require("./next-less.config.js");
const optimizedImagesPlugin = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');


// choose your own modifyVars
//const modifyVars = require("./utils/modifyVars")

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => { }
}

module.exports = withPlugins(
  [
    [optimizedImagesPlugin],
  ],
  nextConfig = withLessExcludeAntd({
    env: {
      ENV_NODE: process.env.NODE_ENV,
    },
    // assetPrefix: zfzConfig.publicPath,
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  })
)
