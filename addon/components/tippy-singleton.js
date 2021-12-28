import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';

import { createSingleton } from 'tippy.js';

export default class TippySingletonComponent extends Component {
  _instances = [];
  _singleton = null;

  get options() {
    return this.args.options || this.args;
  }

  get instances() {
    const { instances } = this.options;
    return instances ? this._instances.concat(instances) : this._instances;
  }

  get tippyOptions() {
    // eslint-disable-next-line no-unused-vars
    const { instances, ...tippyOptions } = this.options;
    return tippyOptions;
  }

  @cached
  get singleton() {
    let singleton = this._singleton;
    if (singleton) {
      singleton.setInstances(this.instances);
      singleton.setProps(this.tippyOptions);
    } else {
      singleton = createSingleton(this.instances, this.tippyOptions);
      singleton.addInstances = this.addInstances.bind(this);
      singleton.removeInstances = this.removeInstances.bind(this);

      // eslint-disable-next-line ember/no-side-effects
      this._singleton = singleton;
    }

    return singleton;
  }

  addInstances(tippyInstances) {
    this._instances = this._instances.concat(tippyInstances);
    this._singleton?.setInstances(this.instances);
  }

  removeInstances(tippyInstances) {
    this._instances = removeItems(this._instances, tippyInstances);
    this._singleton?.setInstances(this.instances);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this._instances = [];
    this._singleton?.destroy();
    this._singleton = null;
  }
}

function removeItems(array, items) {
  array = array.slice();
  items.forEach(item => {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  });

  return array;
}
