# Introduction

Ember integration with [`maplibre-gl-js`](https://docs.maplibre.com/maplibre-gl-js/api/).

## Installation

```sh
ember install ember-maplibre-gl
```

Then, add your maplibre access token to `config/environment.js`:
```javascript
module.exports = function(environment) {
  let ENV = {
    'maplibre-gl': {
      accessToken: 'ACCESS TOKEN HERE'
    },
}
```

## Static Build

By default, `ember-maplibre-gl` will load the `maplibre-gl` library dynamically via [`ember-auto-import`'s dynamic import support](https://github.com/ef4/ember-auto-import#dynamic-import). If you would prefer for `maplibre-gl-js` to not be loaded dynamically, include an `import 'maplibre-gl';` somewhere in your app and `ember-auto-import` will include it in your vendor bundle.
