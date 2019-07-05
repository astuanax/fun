import curry from './curry'
/**
 * @function lte
 * @desc Returns a Boolean indicating one value is larger than or equal to the other
 * @param {*} a - Any valid Javascript value
 * @param {*} b - Any valid Javascript value
 * @returns {Boolean}
 * @example
 *
 * lte(0, 10)  // true
 * const lte0 = lte(0)
 * lt0(10) // false
 * lt0(0) // true
 *
 */

export default curry(function lte (a, b) {
  return a <= b
})
