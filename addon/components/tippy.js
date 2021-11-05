import Component from '@glimmer/component';
import { warn } from '@ember/debug';

import YieldTippyInstance from '../-private/yield-tippy-instance';
import TippyForComponentModifier from '../-private/tippy-for-component';

export default class TippyComponent extends Component {
  yieldTippyInstance = new YieldTippyInstance();
  tippyModifier = TippyForComponentModifier;

  get _options() {
    return this.args.options || this.args;
  }

  get options() {
    return { ...this._options, onInstancesCreate: this.onInstancesCreate.bind(this) };
  }

  onInstancesCreate(instances) {
    if (Array.isArray(instances)) {
      // Tippy himself should warn about it too:
      // > tippy() was passed an Element as the `content` prop, but more than one tippy instance
      // > was created by this invocation. This means the content element will only be appended
      // > to the last tippy instance.
      //
      // > Instead, pass the .innerHTML of the element, or use a function that returns a cloned
      // > version of the element instead.
      //
      // > 1) content: element.innerHTML
      // > 2) content: () => element.cloneNode(true)
      warn(
        '"component:tippy" with "content: HTMLElement" does not support multiple tippies'
          + ` (target="${this.options.target}").`,
        instances.length === 1,
        { id: 'ember-tippy.component-content-htmlelement-multiple-tippies' }
      );

      instances = instances[instances.length - 1];
    }

    this.yieldTippyInstance.tippyInstance = instances;
    this._options.onInstancesCreate?.(instances);
  }
}
