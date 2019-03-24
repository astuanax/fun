/**
 * @private
 * @function arrayConcat
 * @param a1
 * @param a2
 * @returns {T[]}
 */
import curry from '../curry'

export default curry(function concat (a, b) {
  return Array.prototype.concat(a, b)
})
