/**
 * @function fold
 * @description Autocurried function which returns a single item by mapping over the provided string and calls an iterator function
 * @param {cbFunction} cb - Callback function to modify the item
 * @param {*} init - Initial value
 * @param {String} a - Array with items to modify by the cb function
 * @returns {*}
 * @see reduce
 * @since 1.0.5
 * @example
 *
 * const result = fold(filterA, 0, "abc")
 * // result = "bc"
 */

/**
 * @callback cbFunction
 * @param {*} r - Accumulator which accumulates the callback's return values
 * @param {*} item - the current element being processed
 * @param {number} index - the indey of the item being processed
 * @param {String} a - The initial string
 * @return {*}
 */
import curry from '../curry'

export default curry(function fold (cb, init, a) {
  let i = -1
  const l = a.length
  let r = init
  while (++i < l) {
    r = cb(r, a.charAt(i), i, a)
  }
  return r
})
