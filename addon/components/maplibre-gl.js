import { getOwner } from '@ember/application';
import Component from '@ember/component';
import layout from '../templates/components/maplibre-gl';
import maplibreLoader from '../-private/maplibre-loader';

/**
  Component that creates a new [maplibre-gl-js instance](https://www.maplibre.com/maplibre-gl-js/api/#map):

  ```hbs
  {{#maplibre-gl initOptions=initOptions mapLoaded=(action 'mapLoaded') as |map|}}

  {{/maplibre-gl}}
  ```

  @class maplibreGL
  @yield {Hash} map
  @yield {Component} map.call
  @yield {Component} map.control
  @yield {Component} map.image
  @yield {Component} map.layer
  @yield {Component} map.marker
  @yield {Component} map.on
  @yield {Component} map.popup
  @yield {Component} map.source
*/
export default Component.extend({
  layout,

  /**
    An options hash to pass on to the [maplibre-gl-js instance](https://www.maplibre.com/maplibre-gl-js/api/).
    This is only used during map construction, and updates will have no effect.

    @argument initOptions
    @type {Object}
  */
  initOptions: null,

  /**
    An action function to call when the map has finished loading. Note that the component does not yield until the map has loaded,
    so this is the only way to listen for the maplibre load event.

    @argument mapLoaded
    @type {Function}
  */
  mapLoaded: null,

  init() {
    this._super(...arguments);

    this._loader = maplibreLoader.create();
  },

  didInsertElement() {
    this._super(...arguments);

    const { accessToken, map } =
      getOwner(this).resolveRegistration('config:environment')['maplibre-gl'] ||
      {};

    const options = { ...map, ...this.initOptions };
    options.container = this.element;

    this._loader.load(accessToken, options, this.mapLoaded);
  },

  willDestroyElement() {
    this._super(...arguments);

    this._loader.cancel();
  },
});
