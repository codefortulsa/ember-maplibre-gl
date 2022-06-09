import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMap from '../../helpers/create-map';

module('Integration | Component | maplibre gl popup', function (hooks) {
  setupMap(hooks);
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(0);

    await render(
      hbs`{{maplibre-gl-popup map=this.map maplibreGl=this.maplibreGl}}`
    );
  });

  test('popup events can be subscribed to from the template', async function (assert) {
    this.onClose = () => {
      assert.step('onClose');
    };

    await render(hbs`
      {{#maplibre-gl-popup map=this.map maplibreGl=this.maplibreGl as |popup|}}
        {{popup.on 'close' this.onClose}}
      {{/maplibre-gl-popup}}
    `);

    // popups close when the map is clicked
    this.map.fire('click');

    assert.verifySteps(['onClose']);
  });

  test('it handles re-renders on map clicks after closing', async function (assert) {
    this.set('lngLat', [-93.9688, 37.1314]);

    await render(hbs`
      {{#maplibre-gl-popup lngLat=this.lngLat map=this.map maplibreGl=this.maplibreGl}}
        Hi
      {{/maplibre-gl-popup}}
    `);

    await click('.maplibregl-popup-close-button');

    this.set('lngLat', [-30.9688, 36.1314]);

    assert.dom('.maplibregl-popup-content').containsText('Hi');
  });
});
