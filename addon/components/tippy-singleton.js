import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import TippySingletonSourceModifier from '../-private/tippy-singleton-source';
import YieldSingletonLink from '../-private/yield-singleton-link';

export default class TippySingletonComponent extends Component {
  singletonSourceModifier = TippySingletonSourceModifier;

  @tracked instances = [];

  constructor() {
    super(...arguments);

    const yieldSingletonLink = new YieldSingletonLink();
    yieldSingletonLink.onTargetsUpdate = (instances) => this.instances = instances;
    this.yieldSingletonLink = yieldSingletonLink;
  }

  get options() {
    return this.args.options || this.args;
  }

  get singletonSourceOptions() {
    let { instances, ...rest } = this.options;
    instances = this.instances.concat(instances || []);
    return { ...rest, instances };
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.yieldSingletonLink.onTargetsUpdate = null;
    this.yieldSingletonLink = null;
    this.instances = [];
  }
}
