/**
 * @function arrayFilter
 * @desc Autocurried function to filter an array
 * @param {Function} fn - Predicate function
 * @param {Array} a - Array to filter
 * @returns {Array}
 *
 */
import curry from '../curry'

export default curry(function arrayFilter (fn, a) {
  var r = []
  for (let i = 0; i < a.length; i++) {
    if (fn(a[i])) r.push(a[i])
  }
  return r
})
