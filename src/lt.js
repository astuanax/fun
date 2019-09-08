import curry from './curry'

/**
 * @function lt
 * @desc Returns a Boolean indicating one value is larger than the other
 * @param {*} a - Any valid Javascript value
 * @param {*} b - Any valid Javascript value
 * @returns {boolean}
 * @example
 *
 * lt(0, 10)  // true
 * const lt0 = lt(0)
 * lt0(10) // false
 *
 */

export default curry(function lt (a, b) {
  return a < b
})
