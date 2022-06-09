import { scheduleOnce } from '@ember/runloop';
import { computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@ember/component';
import layout from '../templates/components/maplibre-gl-source';

/**
  Adds a data source to the map. The API matches the maplibre [source docs](https://www.maplibre.com/maplibre-gl-js/api/#sources).

  Example:
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

  @class maplibreGLSource
*/
export default Component.extend({
  layout,
  tagName: '',

  map: null,

  /**
    @argument options
    @type {Object}
    @description
    An options hash to set as the source.
    - #### `options.type`
      - A string detailing the map source type. Typically `geojson`.

    - #### `options.data`
      - A data hash for the map, following the source.data API detailed by maplibre docs.
  */
  options: null,

  /**
   * @property options
   * @type {Object}
   * @description The ID of the source to add. Must not conflict with existing sources.
   * {@link https://www.maplibre.com/maplibre-gl-js/api/#map#addsource maplibre}
   */
  sourceId: computed({
    get() {
      return guidFor(this);
    },

    set(k, v) {
      return v;
    },
  }),

  init() {
    this._super(...arguments);

    this.map.addSource(this.sourceId, this.options);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const { sourceId, options } = this;

    if (options) {
      if (options.data) {
        this.map.getSource(sourceId).setData(options.data);
      } else if (options.coordinates) {
        this.map.getSource(sourceId).setCoordinates(options.coordinates);
      }
    }
  },

  willDestroy() {
    this._super(...arguments);

    const sourceId = this.sourceId;

    // wait for any layers to be removed before removing the source
    scheduleOnce('afterRender', this.map, this.map.removeSource, sourceId);
  },
});
