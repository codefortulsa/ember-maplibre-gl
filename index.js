'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      skipBabel: [{ package: 'maplibre-gl', semverRange: '*' }],
    },

    babel: {
      // Ensure that `ember-auto-import` can handle the dynamic imports
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },

  included(app) {
    this._super.included.apply(this, arguments);

    const path = require('path');
    const maplibrePkg = require(require.resolve('maplibre-gl/package.json', {
      paths: [app.project.root],
    }));
    const stylesPath = require.resolve(`maplibre-gl/${maplibrePkg.style}`, {
      paths: [app.project.root],
    });

    app.import(path.relative(app.project.root, stylesPath));
  },
};
