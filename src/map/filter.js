/**
 * @function mapFilter
 * @private
 *
 */
import curry from '../util/curry'

export default curry(function mapFilter (fn, m) {
  let r = new Map()
  for (let [k, v] of m) {
    if (fn(k, v)) r.set(k, v)
  }
  return r
})
