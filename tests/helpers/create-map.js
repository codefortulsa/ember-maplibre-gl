import { Promise } from 'rsvp';
import Config from '../../config/environment';
import QUnit from 'qunit';

const ALLOWED_ERRORS = ['The operation was aborted', 'Failed to fetch'];

export default function setupMap(hooks) {
  hooks.beforeEach(async function () {
    const maplibreGl = await import('maplibre-gl');
    this.maplibreGl = maplibreGl.default;

    await new Promise((resolve) => {
      this.map = new this.maplibreGl.Map({
        container: document
          .querySelector(Config.APP.rootElement)
          .appendChild(document.createElement('div')),
        style: Config['maplibre-gl'].map.style,
      });

      this.map.style.once('data', () => resolve());

      const onErr = (ev) => {
        const err = {
          message: ev.error?.message || 'unknown maplibre error',
          event: ev,
          stack: ev.error?.stack,
        };

        if (ALLOWED_ERRORS.includes(err.message)) {
          // eslint-disable-next-line no-console
          console.error(err.message, ev.error);
        } else {
          QUnit.onUnhandledRejection(err);
        }
      };

      this.map.style.on('error', onErr);
      this.map.on('error', onErr);
    });
  });

  hooks.afterEach(function () {
    this.map.remove();
    document
      .querySelector(Config.APP.rootElement)
      .querySelectorAll('.maplibregl-map')
      .forEach((el) => el.remove());
  });
}
