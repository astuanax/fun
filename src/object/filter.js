/**
 * @function objectFilter
 * @private
 *
 */
import curry from '../curry'
import keys from './keys'

export default curry(function objectFilter (fn, o) {
  let r = {}
  const k = keys(o)
  for (let i = 0; i < k.length; i++) {
    if (fn(o[k[i]])) r[k[i]] = o[k[i]]
  }
  return r
})
