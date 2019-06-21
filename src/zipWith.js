import curry from './curry'
/**
 * @function zipWith
 * @desc Combines the values of 2 arrays into 1 array using a callback function
 * @param {Function} cb - Callback function accepting 2 parameters
 * @param {Array} a - Array to zip
 * @param {Array} b - Array to zip
 * @returns {Array}
 * @example
 *
 * const a = [1, 2, 3]
 * const b = [100, 200, 300]
 * zipWith(add, a, b) // [101, 202, 303]
 *
 */

export default curry(function zipWith (cb, a, b) {
  const arr = []
  const len = Math.min(a.length, b.length)
  let i = 0
  for (i = 0; i < len; i++) {
    arr.push(cb(a[i], b[i]))
  }
  return arr
})
