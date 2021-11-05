import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { registerDestructor } from '@ember/destroyable';

export default class DemoBasicUsageComponentComponent extends Component {
  // BEGIN-SNIPPET basic-usage-component.js
  @tracked now = new Date();

  constructor() {
    super(...arguments);

    const intervalId = setInterval(() => this.now = new Date(), 1000);
    registerDestructor(this, () => clearInterval(intervalId));
  }

  get currentTime() {
    return this.now.toLocaleTimeString();
  }
  // END-SNIPPET
}
