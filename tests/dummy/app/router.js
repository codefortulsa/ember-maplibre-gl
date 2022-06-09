import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  docsRoute(this, function () {
    // docs homepage (required)
    this.route('usage');
    this.route('installation');
    this.route('container');
    this.route('sources-layers');
    this.route('actions');
    this.route('templates');
    this.route('contextual-components');

    this.route('components', function () {
      this.route('maplibre-gl');
      this.route('maplibre-gl-call');
      this.route('maplibre-gl-control');
      this.route('maplibre-gl-image');
      this.route('maplibre-gl-layer');
      this.route('maplibre-gl-marker');
      this.route('maplibre-gl-on');
      this.route('maplibre-gl-popup');
      this.route('maplibre-gl-source');
    }); // docs subpage
    this.route('api', function () {
      // autogenerated API homepage (required)
      this.route('item', { path: '/*path' }); // autogenerated API subpages (required)
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
