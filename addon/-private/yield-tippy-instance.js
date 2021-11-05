import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class YieldTippyInstance {
  @tracked tippyInstance = null;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop !== 'tippyInstance') {
          const { tippyInstance } = target;
          target = tippyInstance && prop in tippyInstance ? tippyInstance : target;
        }

        return target[prop];
      },

      set(target, prop, value) {
        if (prop !== 'tippyInstance') {
          const { tippyInstance } = target;
          target = tippyInstance && prop in tippyInstance ? tippyInstance : target;
        }

        target[prop] = value;
        return true;
      },
    });
  }

  @action
  update() {
    const { tippyInstance } = this;
    if (tippyInstance && tippyInstance.popperInstance) {
      tippyInstance.popperInstance.update();
    }
  }

  show() {}
  hide() {}
  hideWithInteractivity() {}
  disable() {}
  enable() {}
  setProps() {}
  setContent() {}
  unmount() {}
  destroy() {}
}
