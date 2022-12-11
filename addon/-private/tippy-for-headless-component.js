import TippyModifier from '../modifiers/tippy';

export default class TippyForHeadlessComponentModifier extends TippyModifier {
  get defaultTarget() {
    return this.element.parentElement;
  }

  get options() {
    return {
      content: null,
      animation: false,
      render: this.render.bind(this),
      ...this._positionalArgs[0],
    };
  }

  // Should return an object with two properties:
  // - `popper` (the root popper element)
  // - `onUpdate` [optional] callback whenever .setProps() or .setContent() is called
  render(instance) {
    const popper = this.element;
    popper.remove(); // detach from the document
    if (popper.hidden) {
      popper.hidden = false;
    }

    let onUpdate;
    const onUpdateOption = this._options.onUpdate;
    if (onUpdateOption) {
      onUpdate = function onUpdateFn(/* prevProps, nextProps */) {
        onUpdateOption?.(instance, ...arguments);
      };
    }

    return { popper, onUpdate };
  }
}
