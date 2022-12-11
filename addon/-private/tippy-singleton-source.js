import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

import { createSingleton } from 'tippy.js';

function cleanup(modifierInstance) {
  const { onSingletonWillDestroy } = modifierInstance._options;
  onSingletonWillDestroy?.(modifierInstance.singleton);

  modifierInstance.singleton.destroy();
  modifierInstance.singleton = null;

  modifierInstance._options = null;
}

export default class TippySingletonSourceModifier extends Modifier {
  _positionalArgs = null;

  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, cleanup);
  }

  get options() {
    return this._positionalArgs[0];
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

  modify(element, positional /*, named*/) {
    this._positionalArgs = positional;
    this._options = this.parseOptions(this.options);

    // Are we updating or installing?
    if (!this.singleton) {
      // Installing
      const { tippyInstances, tippySingletonOptions, onSingletonCreate } = this._options;
      this.singleton = createSingleton(tippyInstances, tippySingletonOptions);
      onSingletonCreate?.(this.singleton);
    } else {
      // Updating
      const { tippyInstances, tippySingletonOptions, onSingletonDidUpdate } = this._options;
      this.singleton.setInstances(tippyInstances);
      this.singleton.setProps(tippySingletonOptions);
      onSingletonDidUpdate?.(this.singleton);
    }
  }
}
