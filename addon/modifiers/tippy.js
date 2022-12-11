import Modifier from 'ember-modifier';
import { isHTMLSafe } from '@ember/template';
import { getOwnConfig, importSync, macroCondition } from '@embroider/macros';
import { registerDestructor } from '@ember/destroyable';

import tippy from 'tippy.js';

if (macroCondition(getOwnConfig().shouldIncludeTippyCoreCss)) {
  importSync('tippy.js/dist/tippy.css');
}

function cleanup(modifierInstance) {
  const { onInstancesWillDestroy } = modifierInstance._options;
  onInstancesWillDestroy?.(modifierInstance._instances);

  modifierInstance._singleton?.removeTargets(modifierInstance._instances);
  modifierInstance._singleton = null;

  modifierInstance._instances.forEach((x) => x.destroy());
  modifierInstance._instances = null;
  modifierInstance._options = null;
  modifierInstance._namedArgs = null;
  modifierInstance._positionalArgs = null;
  modifierInstance.element = null;
}

export default class TippyModifier extends Modifier {
  element = null;
  _namedArgs = null;
  _positionalArgs = null;
  _options = null;
  _instances = null;
  _singleton = null;

  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, cleanup);
  }

  get defaultTarget() {
    return this.element;
  }

  get options() {
    const optionsHash = this._namedArgs?.options || this._namedArgs;
    return { content: this._positionalArgs[0], ...optionsHash };
  }

  parseOptions(options) {
    if (options.content instanceof HTMLElement && options.content.hidden) {
      options.content.hidden = false;
    }

    if (options.allowHTML == null && isHTMLSafe(options.content)) {
      options.allowHTML = true;
    }

    const {
      // tippy target(s)
      target,

      // addon specific options
      singleton,
      onUpdate, // for headless only
      onInstancesCreate,
      onInstancesDidUpdate,
      onInstancesWillDestroy,

      // the rest are tippy options (tippy warns about unknown options)
      ...tippyOptions
    } = options;

    return {
      tippyTargets: target || this.defaultTarget,
      tippyOptions,

      singleton,
      onUpdate,
      onInstancesCreate,
      onInstancesDidUpdate,
      onInstancesWillDestroy,
    };
  }

  modify(element, positional, named) {
    this.element = element;
    this._namedArgs = named;
    this._positionalArgs = positional;
    this._options = this.parseOptions(this.options);

    // Are we updating or installing?
    if (!this._instances) {
      // Installing
      const { tippyTargets, tippyOptions, onInstancesCreate, singleton } = this._options;

      // NOTE: tippy() returns a single instance or an array of instances,
      // depending on the type of targets argument.
      // https://atomiks.github.io/tippyjs/v6/tippy-instance/#accessing-an-instance
      const instances = tippy(tippyTargets, tippyOptions);
      this._instances = [].concat(instances);

      if (singleton) {
        singleton.addTargets(this._instances);
        this._singleton = singleton;
      }

      onInstancesCreate?.(this._instances);
    } else {
      // Updating
      const { tippyOptions, onInstancesDidUpdate } = this._options;

      this._instances.forEach((x) => x.setProps(tippyOptions));
      onInstancesDidUpdate?.(this._instances);
    }
  }
}
