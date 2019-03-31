/**
 * @function last
 * @param [a]
 * @return a | undefined
 */
import curry1 from './_private/curry1'

export default curry1(function last (a) {
  return a && a.length ? a[a.length - 1] : undefined
})
