// BEGIN-SNIPPET plugins.js
import Component from '@glimmer/component';

// https://atomiks.github.io/tippyjs/v6/plugins/#exported-plugins
import { followCursor } from 'tippy.js';

export default class DemoPluginsComponent extends Component {
  get plugins() {
    return [followCursor, this.hideOnEsc];
  }

  // https://atomiks.github.io/tippyjs/v6/plugins/#hideonesc
  hideOnEsc = {
    name: 'hideOnEsc',
    defaultValue: true,
    fn({ hide }) {
      function onKeyDown(event) {
        if (event.keyCode === 27) {
          hide();
        }
      }

      return {
        onShow() {
          document.addEventListener('keydown', onKeyDown);
        },
        onHide() {
          document.removeEventListener('keydown', onKeyDown);
        },
      };
    },
  };
}
// END-SNIPPET
