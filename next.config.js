const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');


module.exports = {
  // Target must be serverless
  target: "serverless",
};

module.exports = withPlugins([
    [withCSS],
    [withImages({target: 'serverless'})]
  ]
  );



