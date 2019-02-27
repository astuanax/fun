/**
 * @function fold
 * @description Returns a single item by mapping over the provided array and calling an iterator function
 * @param {Function} cb - Callback function to modify the item
 * @param {*} init - Initial value
 * @param {Array} a - Array with items to modify by the cb function
 * @alias reduce
 * @since 1.0.2
 * @author Len Dierickx
 * @example
 * 
 * const result = fold(add, 0, [1,1,1])
 * // result = 3
 */
import curry from '../util/curry'

export default curry(function fold (cb, init, a) {
  let i = -1
  const l = a.length
  let r = init
  while (++i < l) {
    r = cb(r, a[i], i, a)
  }
  return r
})
