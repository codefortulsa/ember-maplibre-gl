# API Reference

- [`ember-maplibre-gl`](#ember-maplibre-gl)
- [`ember-maplibre-gl` config](#configuration)
- [`maplibre-gl`](#maplibre-gl)
- [`map-source`](#map-source)
- [`map-source-layer`](#map-source-layer)
- [`map-on` event](#map-on)
- [`map-popup`](#map-popup)
- [`map-image`](#map-image)

## ember-maplibre-gl

[maplibre-gl-js](https://www.maplibre.com/maplibre-gl-js/api/) bindings to Ember.
Aims to be a fairly thin wrapper around the maplibre API.

Using this addon will mostly consist of creating a map (or maps), adding [sources of data](https://www.maplibre.com/maplibre-gl-js/style-spec/#sources) to the map, adding [layers](https://www.maplibre.com/maplibre-gl-js/style-spec/#layers) to render the data from the sources, and calling [functions on the map](https://www.maplibre.com/maplibre-gl-js/api/#map) to manipulate the camera.

## configuration

Add a `maplibre-gl` entry to ENV.

### Properties
Available properties are documented in the [maplibre-gl-js#map API](https://www.maplibre.com/maplibre-gl-js/api/#map).

- `accessToken`: Required. Your [maplibre token](https://www.maplibre.com/help/how-access-tokens-work/).
- `map`: Optional. Default options for all map instances. Additional options are documented in the [maplibre-gl Map docs](https://www.maplibre.com/maplibre-gl-js/api/#map).
- `background`: Optional. Default options for all background layers.
- `fill`: Optional. Default options for all fill layers.
- `line`: Optional. Default options for all line layers.
- `symbol`: Optional. Default options for all symbol layers.
- `raster`: Optional. Default options for all raster layers.
- `circle`: Optional. Default options for all circle layers.
- `fill-extrusion`: Optional. Default options for all fill-extrusion layers.
- `marker`: Optional. Default options for all markers.
- `popup`: Optional. Default options for all popups.

### Example
```javascript
module.exports = function(environment) {
  const ENV = {
    // other env properties
    'maplibre-gl': {
      accessToken: 'YOUR ACCESS TOKEN HERE',
      map: {
        minZoom: 2,
        maxZoom: 14,
        style: 'maplibre://styles/maplibre/basic-v9',
        zoom: 13,
        center: [ -96.7969879, 32.7766642 ]
      },
      marker: {
        offset: [ -1, -1 ]
      },
      popup: {
        offset: [ 0, -10 ]
      }
    }
  };
};
```

## maplibre-gl

Component that creates a new [maplibre-gl-js instance](https://www.maplibre.com/maplibre-gl-js/api/).

### Properties
- `initOptions`
  - An options hash to pass on to the [maplibre constructor](https://www.maplibre.com/maplibre-gl-js/api/#map). This is only used during map construction, and updates will have no effect.
- `mapLoaded`
  - action function to call when the map has finished loading. Note that the component does not yield until the map has loaded, so this is the only way to listen for the maplibre load event.

### Example
```hbs
{{#maplibre-gl initOptions=(hash ...propsHere) mapLoaded=(action 'mapLoaded') as |map|}}
{{/maplibre-gl}}
```

## map-source
Adds a data source to the map. The API matches the maplibre [source docs](https://www.maplibre.com/maplibre-gl-js/api/#sources).

### Properties
- `options`
  - An options hash to set as the source.
- `options.type`
  - A string detailing the map source type. Typically `geojson`.
- `options.data`
  - A data hash for the map, following the source.data API detailed by maplibre docs.

### Example
```hbs
{{#maplibre-gl as |map|}}
  {{#map.source options=(hash
    type='geojson'
    data=(hash
      type='FeatureCollection'
      features=(array
        (hash
          type='Feature'
          geometry=(hash
            type='Point'
            coordinates=(array -96.7969879 32.7766642)
          )
        )
      )
    ))}}
  {{/map.source}}
{{/maplibre-gl}}
```

## map-source-layer
Adds a layer to the map. A map can have many layers. The API matches the maplibre [layer docs](https://www.maplibre.com/maplibre-gl-js/style-spec/#layers).

### Properties
- `layer`
  - A hash to pass on to the maplibre [layer](https://www.maplibre.com/maplibre-gl-js/style-spec/#layers).

### Example
```hbs
{{#maplibre-gl as |map|}}
  {{#map.source options=(hash
    type='geojson'
    data=(hash
      type='FeatureCollection'
      features=(array
        (hash
          type='Feature'
          geometry=(hash
            type='Point'
            coordinates=(array -96.7969879 32.7766642)
          )
        )
      )
    )) as |source|}}
    {{source.layer layer=(hash
        type='circle'
        paint=(hash circle-color='#007cbf' circle-radius=10))}}
  {{/map.source}}
{{/maplibre-gl}}
```

# map-on
Adds an action to listen for [maplibre events](https://www.maplibre.com/maplibre-gl-js/api/#map#on).

### Positional Parameters
- `eventSource`
  - The first positional parameter. The event type to listen for.
- `action`
  - The second positional parameter. The action provided by the consumer to call when the event is triggered.

### Example
```hbs
{{#maplibre-gl as |map|}}
  {{map.on 'click' (action 'mapClicked')}}
{{/maplibre-gl}}
```

```javascript
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    mapClicked({ target: map, point }) {
      console.log(map, point);
    }
  }
});
```

# map-popup
Adds a [popup](https://www.maplibre.com/maplibre-gl-js/api/#popup) to the map.

### Properties
- `lngLat`
  - The longitude and latitude to pin the popup at.

### Example
```hbs
{{#maplibre-gl as |map|}}
  {{#map.source options=(hash
    type='geojson'
    data=(hash
      type='FeatureCollection'
      features=(array
        (hash
          type='Feature'
          geometry=(hash
            type='Point'
            coordinates=(array -96.7969879 32.7766642)
          )
        )
      )
    )) as |source|}}
    {{source.layer layer=(hash
        type='circle'
        paint=(hash circle-color='#007cbf' circle-radius=10))}}
  {{/map.source}}

  {{#map.popup lngLat=(array -96.7969879 32.7766642)}}
    Dallas, TX
  {{/map.popup}}
{{/maplibre-gl}}
```

# map-image
Adds an image for use in the map, see [here](https://www.maplibre.com/maplibre-gl-js/api/#map#addimage).

### Properties
- `name`
  - The unique name for the image. The name will be referenced in a source layer as the `icon-image`. Reference [layers-symbol](https://www.maplibre.com/maplibre-gl-js/style-spec/#layers-symbol) for more details. Property can also be used as the first positional parameter.
- `image`
  - The path to your image, typically `/assets/<some_image>`. Property can also be used as the second positional parameter.
- `width`
  - The width of the image in pixels.
- `height`
  - The height of the image in pixels.

### Example
```hbs
{{#maplibre-gl as |map|}}
  {{map.image 'cat' '/assets/cat.png' width=48 height=48}}
  {{!-- `name` and `icon-image` used as positional params above --}}

  {{#map.source options=(hash type='geojson' data=marker) as |source|}}
    {{source.layer layer=(hash
        type='symbol'
        layout=(hash
          icon-image='cat'
          icon-size=0.25))}}
  {{/map.source}}
{{/maplibre-gl}}
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
  }
});
```
