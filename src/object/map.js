/**
 * Maps over an object and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Object} a
 * @return {Object}
 **/
import curry from '../curry'
import empty from '../empty'
import keys from './keys'

export default curry(function map (cb, a) {
  const k = keys(a)
  let i = -1
  const l = k.length
  const r = empty(a)
  while (++i < l) {
    r[k[i]] = cb(a[k[i]], k[i], a)
  }
  return r
})
