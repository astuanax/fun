/**
 * @author Len Dierickx
 * fold
 *
 */
import curry from '../util/curry'
import keys from './keys'

export default curry(function fold (cb, init, o) {
  const k = keys(o)
  let i = -1
  const l = k.length
  let r = Object(init)
  while (++i < l) {
    r = cb(r, o[k[i]], k[i], o)
  }
  return r
})
