'use strict';

module.exports = {
  description: 'ember-tippy addon blueprint',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'tippy.js', target: '^6.0.0' },
    ]);
  }
};
