/**
 * Applies a list of predicates to the data and returns true if one passes
 *
 * @function anyPass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*...) -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/
import curry from '../util/curry'

export default curry(function anyPass (cbs, a) {
  for (let i = 0; i < cbs.length; i++) {
    if (cbs[i](a)) return true
  }
  return false
})
