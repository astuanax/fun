import curry from './curry'
import zipWith from './zipWith'
/**
 * @function zip
 * @desc Autocurried function that zips 2 arrays into an Array of pairs
 * @param {Array} a - Array to zip
 * @param {Array} b - Array to zip
 * @returns {Array}
 * @example
 *
 * const a = [1, 2, 3]
 * const b = [100, 200, 300]
 * zip(a, b) // [[100, 1], [200, 2], [300, 3]]
 *
 */

export default curry(function zip (a, b) {
  return zipWith(function _zipWith (x, y) { return [x, y] }, a, b)
})
