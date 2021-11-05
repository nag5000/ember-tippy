// BEGIN-SNIPPET themes.js
import Component from '@glimmer/component';

import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/svg-arrow.css';
import { roundArrow } from 'tippy.js';

export default class DemoThemesComponent extends Component {
  roundArrow = roundArrow;
}
// END-SNIPPET
