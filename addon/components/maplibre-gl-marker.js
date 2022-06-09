import { assert } from '@ember/debug';
import { getOwner } from '@ember/application';
import Component from '@ember/component';
import layout from '../templates/components/maplibre-gl-marker';

/**
 * A utility that brokers HTTP requests...
 *
 * @class maplibreGlMarker
 */
export default Component.extend({
  layout,
  tagName: '',

  maplibreGl: null,
  map: null,
  initOptions: null,
  lngLat: null,

  init() {
    this._super(...arguments);

    this.domContent = document.createElement('div');
    const { lngLat, initOptions } = this;

    assert(
      'maplibre-gl-marker requires lngLat, maybe you passed latLng?',
      lngLat
    );

    const options = {
      ...(
        getOwner(this).resolveRegistration('config:environment')[
          'maplibre-gl'
        ] ?? {}
      ).marker,
      ...initOptions,
    };

    this.marker = new this.maplibreGl.Marker(this.domContent, options)
      .setLngLat(lngLat)
      .addTo(this.map);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const lngLat = this.lngLat;
    assert(
      'maplibre-gl-marker requires lngLat, maybe you passed latLng?',
      lngLat
    );

    this.marker.setLngLat(lngLat);
  },

  willDestroy() {
    this._super(...arguments);

    this.marker.remove();
  },
});
