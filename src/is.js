/**
 * @function is
 * @description Verifies the type of the provided argument
 *
 */

import curry from './curry'
import type from './type'

export default curry(function is (Ctor, val) {
  return type(val) === Ctor
})
