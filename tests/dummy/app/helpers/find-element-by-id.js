// BEGIN-SNIPPET find-element-by-id-helper
import { helper } from '@ember/component/helper';

export default helper(function findElementById([id]/*, named*/) {
  return document.getElementById(id);
});
// END-SNIPPET
