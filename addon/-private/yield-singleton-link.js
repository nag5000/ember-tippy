export default class YieldSingletonLink {
  _targets = new Set();
  onTargetsUpdate = null;

  addTargets(tippyInstances) {
    tippyInstances.forEach(x => this._targets.add(x));
    this._fireTargetsUpdate();
  }

  removeTargets(tippyInstances) {
    tippyInstances.forEach(x => this._targets.delete(x));
    this._fireTargetsUpdate();
  }

  _fireTargetsUpdate() {
    if (this.onTargetsUpdate) {
      const targets = Array.from(this._targets);
      this.onTargetsUpdate(targets);
    }
  }
}
