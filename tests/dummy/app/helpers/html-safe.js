// BEGIN-SNIPPET html-safe-helper
import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function htmlSafeHelperFn(params) {
  return htmlSafe(params.join(''));
});
// END-SNIPPET
