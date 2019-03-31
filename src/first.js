/**
 * @function first
 * @param [a]
 * @return a | undefined
 * @example
 *
 * const arr = [1, 2, 4]
 * first([1, 2, 4]) // returns 1
 */
import curry1 from './_private/curry1'

export default curry1(function first (a) {
  return a && a.length ? a[0] : undefined
})
