import Modifier from 'ember-modifier';
import { isHTMLSafe } from '@ember/template';
import { getOwnConfig, importSync, macroCondition } from '@embroider/macros';

import tippy from 'tippy.js';

if (macroCondition(getOwnConfig().shouldIncludeTippyCoreCss)) {
  importSync('tippy.js/dist/tippy.css');
}

export default class TippyModifier extends Modifier {
  get defaultTarget() {
    return this.element;
  }

  get options() {
    const optionsHash = this.args.named.options || this.args.named;
    return { content: this.args.positional[0], ...optionsHash };
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

  didInstall() {
    this._options = this.parseOptions(this.options);
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
  }

  didUpdateArguments() {
    this._options = this.parseOptions(this.options);
    const { tippyOptions, onInstancesDidUpdate } = this._options;

    this._instances.forEach(x => x.setProps(tippyOptions));
    onInstancesDidUpdate?.(this._instances);
  }

  willDestroy() {
    const { onInstancesWillDestroy } = this._options;
    onInstancesWillDestroy?.(this._instances);

    this._singleton?.removeTargets(this._instances);
    this._singleton = null;

    this._instances.forEach(x => x.destroy());
    this._instances = null;
    this._options = null;
  }
}
