import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | maplibre gl call', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.actions = {};
    this.send = (actionName, ...args) =>
      this.actions[actionName].apply(this, args);
  });

  test('it calls the function on the object', async function (assert) {
    const expectedArgs = ['a', 1, 'z'];
    const expectedResp = 'kyle turney';
    const obj = {
      func(...args) {
        assert.deepEqual(args, expectedArgs, 'should pass on args');
        assert.strictEqual(this, obj, 'should set the context to the obj');

        return expectedResp;
      },
    };

    this.set('obj', obj);
    this.set('args', expectedArgs);
    this.actions.onResp = (resp) => {
      assert.strictEqual(
        resp,
        expectedResp,
        'should call the onResp action with the obj.func result'
      );
    };

    await render(
      hbs`{{maplibre-gl-call obj=this.obj func='func' args=this.args onResp=(action 'onResp')}}`
    );
  });

  test('it works with positionalParams', async function (assert) {
    const expectedResp = 'kyle turney';
    const obj = {
      func(...args) {
        assert.deepEqual(args, ['a', 1, 'z'], 'should pass on args');
        assert.strictEqual(this, obj, 'should set the context to the obj');

        return expectedResp;
      },
    };

    this.set('obj', obj);
    this.actions.onResp = (resp) => {
      assert.strictEqual(
        resp,
        expectedResp,
        'should call the onResp action with the obj.func result'
      );
    };

    await render(
      hbs`{{maplibre-gl-call 'func' 'a' 1 'z' obj=this.obj onResp=(action 'onResp')}}`
    );
  });
});
