import TippyComponent from './tippy';
import TippyForHeadlessComponentModifier from '../-private/tippy-for-headless-component';

export default class TippyHeadlessComponent extends TippyComponent {
  tippyModifier = TippyForHeadlessComponentModifier;
}
