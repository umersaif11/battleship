// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ],
  env: {
    test: {
      plugins: ['dynamic-import-node'] // Fixes "import()" crashes in Jest
    }
  }
};