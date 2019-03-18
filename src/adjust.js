/**
 * Modifies an item in an array using the provided function
 *
 * @function adjust
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @sig (a -> a) -> num -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Number} i - The index at which to modify the array, accepts postitive and negative indexes
 * @param {Iterable} [a] - Array with data
 * @return {Iterable} [a]
 **/
import curry from '../util/curry'

export default curry(function adjust (fn, i, a) {
  const r = Array.prototype.slice.call(a)
  const idx = i < 0 ? r.length + i : i
  if (!a[idx]) return r
  r[idx] = fn(r[idx])
  return r
})
