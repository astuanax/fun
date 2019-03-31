/**
 * Concatenates 2 items together
 *
 * @function concat
 * @description Concatenates 2 items together
 * @since v1.0.4
 * @param {a} a - Left side of the concatenation
 * @param {a} b - right side of the concatenation
 * @return {a} Concatenated item
 **/

import curry from './curry'
import arrayConcat from './array/concat'
import stringConcat from './string/concat'
import type from './type'

export default curry(function concat (a, b) {
  const typeMap = {
    'String': stringConcat,
    'Array': arrayConcat
  }
  return typeMap[type(a)](a, b)
})
