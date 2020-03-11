const path = require('path');

const custom = require('../webpack.config.js');

module.exports = {
  webpackFinal: (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve( "../src"),
    ];
    config.resolve.extensions.push('.ts', '.tsx');
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  }
};
