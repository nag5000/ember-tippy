import Modifier from 'ember-modifier';

import { createSingleton } from 'tippy.js';

export default class TippySingletonSourceModifier extends Modifier {
  get options() {
    return this.args.positional[0];
  }

  parseOptions(options) {
    const {
      // singleton target(s)
      instances,

      // addon specific options
      onSingletonCreate,
      onSingletonDidUpdate,
      onSingletonWillDestroy,

      // the rest are tippy singleton options (tippy warns about unknown options)
      ...tippySingletonOptions
    } = options;

    return {
      tippyInstances: instances,
      tippySingletonOptions,

      onSingletonCreate,
      onSingletonDidUpdate,
      onSingletonWillDestroy,
    };
  }

  didInstall() {
    this._options = this.parseOptions(this.options);
    const { tippyInstances, tippySingletonOptions, onSingletonCreate } = this._options;
    this.singleton = createSingleton(tippyInstances, tippySingletonOptions);
    onSingletonCreate?.(this.singleton);
  }

  didUpdateArguments() {
    this._options = this.parseOptions(this.options);
    const { tippyInstances, tippySingletonOptions, onSingletonDidUpdate } = this._options;
    this.singleton.setInstances(tippyInstances);
    this.singleton.setProps(tippySingletonOptions);
    onSingletonDidUpdate?.(this.singleton);
  }

  willDestroy() {
    const { onSingletonWillDestroy } = this._options;
    onSingletonWillDestroy?.(this.singleton);

    this.singleton.destroy();
    this.singleton = null;

    this._options = null;
  }
}
