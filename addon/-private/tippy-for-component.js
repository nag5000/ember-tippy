import TippyModifier from '../modifiers/tippy';

export default class TippyForComponentModifier extends TippyModifier {
  get defaultTarget() {
    return this.element.parentElement;
  }

  get options() {
    return { content: this.element, ...this.args.positional[0] };
  }
}
