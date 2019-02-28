/**
 * Applies a list of predicates to the data and returns true if all pass
 *
 * @function allPass
 * @description Applies a list of predicates to the data and returns true if all pass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*... -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/
import curry from '../util/curry'

export default curry(function allPass (cbs, a) {
  for (let i = 0; i < cbs.length; i++) {
    if (!cbs[i](a)) return false
  }
  return true
})
