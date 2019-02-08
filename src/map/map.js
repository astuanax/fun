/**
 * Maps over a Map and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Map} a
 * @return {Map}
 **/
import curry from '../util/curry'
import empty from '../util/empty'

export default curry(function map (cb, a) {
  const r = empty(a)
  a.forEach((v, k, map) => {
    r.set(k, cb(v, k, map))
  })
  return r
})
