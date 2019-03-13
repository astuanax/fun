/**

 * zipWith
 *
 *  @function zipWith
 */
import curry from './curry'

export default curry(function zipWith (cb, a, b) {
  const arr = []
  const len = Math.min(a.length, b.length)
  let i = 0
  for (i = 0; i < len; i++) {
    arr.push(cb(a[i], b[i]))
  }
  return arr
})
