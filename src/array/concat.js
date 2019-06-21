/**
 * @function arrayConcat
 * @desc Autocurried concatenation function using native concat
 * @param {Array} a1 - Left side of the concatenation
 * @param {Array} a2 - Right side of the concatenation
 * @returns {T[]}
 * @example
 *
 * const startsWithZero = concat([0])
 *const OneTwoThree = startsWithZero([1, 2, 3])
 * // [0, 1, 2, 3]
 */
import curry from '../curry'

export default curry(function concat (l, r) {
  return Array.prototype.concat(l, r)
})
