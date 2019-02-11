/**
 * Find the index matching a predicate
 *
 * @function
 * @since v1.0.2
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} Predicate function returns a boolean
 * @param {[*]} An array like object
 * @return
 **/

import curry from '../util/curry'

export default curry(function findIndex (fn, a) {
  let i = 0
  const l = a.length
  while (i < l) {
    if (fn(a[i])) {
      return i
    }
    i += 1
  }
  return -1
})
