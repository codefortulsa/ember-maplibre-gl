import noop from 'ember-maplibre-gl/utils/noop';
import { module, test } from 'qunit';

module('Unit | Utility | noop', function () {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let result = noop();
    assert.strictEqual(result, undefined);
  });
});
