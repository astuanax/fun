/**
 * @function apply
 * @description The apply() method calls a function with the given arguments provided as an array, and the function as context.
 * @param fn
 * @param args
 * @return {*}
 * @example
 *
 * var a = apply(function () {
 *      return [].slice.call(arguments).map(x => x * 2)
 *   })
 * a([1, 2, 3])
 * // [2, 4, 6]
 */
import curry from './curry'

export default curry(function apply (fn, args) {
  return fn.apply(fn, args)
})
