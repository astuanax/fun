/**
 * @author Len Dierickx
 * fold
 *
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
