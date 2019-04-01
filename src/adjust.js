/**
 * Modifies an item in an array using the provided function
 *
 * @function adjust
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @param {Function} fn - to modify the item at the specified index
 * @param {Number} i - The index at which to modify the array, accepts postitive and negative indexes
 * @param {Array} a - Array with data
 * @return {Array} Array with the adjusted item
 * @example
 *
 * adjust(add(1), -3, [0, 1, 2, 3]) // [0, 2, 2, 3]
 *
 * const addTen = add(10)
 * adjust(addTen, 2, [2, 3, 4, 5, 6]) // [2, 3, 14, 5, 6]
 *
 **/
import curry from './curry'

export default curry(function adjust (fn, i, a) {
  const r = Array.prototype.slice.call(a)
  const idx = i < 0 ? r.length + i : i
  if (!a[idx]) return r
  r[idx] = fn(r[idx])
  return r
})
