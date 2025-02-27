import { assert } from '@ember/debug';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { bind } from '@ember/runloop';
import Component from '@ember/component';

/**
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

  @class maplibreGLOn
 */
const maplibreGlOnComponent = Component.extend({
  tagName: '',

  eventSource: null,
  event: null,
  layerId: null,
  action: null,

  _prevEvent: null,
  _prevLayerId: null,

  _event: computed('event', function () {
    const event = this.event;
    assert(
      `maplibre-gl-event requires event to be a string, was ${event}`,
      typeof event === 'string'
    );

    return event;
  }).readOnly(),

  _layerId: computed('layerId', '_action', function () {
    const { layerId, _action } = this;
    if (layerId === _action) {
      return null;
    }

    return layerId;
  }).readOnly(),

  _action: computed('layerId', 'action', function () {
    const { layerId, action } = this;
    return action || layerId;
  }).readOnly(),

  init() {
    this._super(...arguments);

    this._boundOnEvent = bind(this, this._onEvent);
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const { eventSource, _layerId, _event, _prevEvent, _prevLayerId, _action } =
      this;

    assert('maplibre-gl-event requires an eventSource', isPresent(eventSource));
    assert('maplibre-gl-event requires an action', isPresent(_action));

    if (_event !== _prevEvent || _layerId !== _prevLayerId) {
      if (_prevEvent) {
        if (_prevLayerId) {
          eventSource.off(_prevEvent, _prevLayerId, this._boundOnEvent);
        } else {
          eventSource.off(_prevEvent, this._boundOnEvent);
        }
      }

      this._prevEvent = _event;
      this._prevLayerId = _layerId;

      if (_layerId) {
        eventSource.on(_event, _layerId, this._boundOnEvent);
      } else {
        eventSource.on(_event, this._boundOnEvent);
      }
    }
  },

  willDestroy() {
    this._super(...arguments);

    const { eventSource, _prevEvent, _prevLayerId } = this;
    if (eventSource && _prevEvent) {
      if (_prevLayerId) {
        eventSource.off(_prevEvent, _prevLayerId, this._boundOnEvent);
      } else {
        eventSource.off(_prevEvent, this._boundOnEvent);
      }
    }
  },

  _onEvent() {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    this._action(...arguments);
  },
});

maplibreGlOnComponent.reopenClass({
  positionalParams: ['event', 'layerId', 'action'],
});

export default maplibreGlOnComponent;
