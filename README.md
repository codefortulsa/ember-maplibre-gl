# ember-maplibre-gl

[![Latest NPM release][npm-badge]][npm-badge-url]
[![GitHub Actions Build Status][github-actions-badge]][github-actions-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

[npm-badge]: https://img.shields.io/npm/v/ember-maplibre-gl.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-maplibre-gl
[github-actions-badge]: https://github.com/kturney/ember-maplibre-gl/workflows/CI/badge.svg
[github-actions-badge-url]: https://github.com/kturney/ember-maplibre-gl/actions/workflows/ci.yml?query=branch%3Amaster
[ember-observer-badge]: http://emberobserver.com/badges/ember-maplibre-gl.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-maplibre-gl

Ember integration with [maplibre-gl-js](https://www.maplibre.com/maplibre-gl-js/api/).

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

## Compatibility
* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above

## API Documentation
See the detailed [API Documentation](API.md).

## Example

<strong>Note:</strong> The example below uses [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers).

Add the following map options to `config/environment.js` to style the map, set a default zoom level, and to provide a default centerpoint:

```javascript
'maplibre-gl': {
  accessToken: 'ACCESS TOKEN HERE',
  map: {
    style: 'maplibre://styles/maplibre/basic-v9',
    zoom: 13,
    center: [ -96.7969879, 32.7766642 ]
  }
},
```

```javascript
import Controller from '@ember/controller';

export default Controller.extend({
  marker: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [ -96.7969879, 32.7766642 ] }
      }
    ]
  },

  actions: {
    mapClicked({ target: map, point }) {
      console.log(map, point);
    }
  }
});
```

```handlebars
{{#maplibre-gl class='map-container' initOptions=(hash pitch=30) as |map|}}
  {{map.on 'click' (action 'mapClicked')}}

  {{#map.source options=(hash type='geojson' data=marker) as |source|}}
    {{source.layer layer=(hash
      type='circle'
      paint=(hash circle-color='#007cbf' circle-radius=10))}}
  {{/map.source}}
{{/maplibre-gl}}
```

The above example does the following:

* Creates an instance of a map
* Attaches a `mapClicked` action when anywhere on the map is clicked
* Generates a geojson map source (`marker`)
* Draws a blue circle on the map at the coordinates provided by `marker`
