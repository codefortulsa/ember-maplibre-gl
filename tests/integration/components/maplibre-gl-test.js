import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | maplibre gl', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(0);

    // Template block usage:
    await render(hbs`
      {{#maplibre-gl as |map|}}
        <div id='loaded-sigil'></div>
      {{/maplibre-gl}}
    `);

    await waitFor('#loaded-sigil');
  });
});
