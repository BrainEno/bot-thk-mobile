const path = require('path');
const pak = require('./package.json');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['inline-dotenv', 'react-native-reanimated/plugin'],
  };
};
