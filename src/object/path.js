/**
 * @function path
 */
import curry from '../curry'

export default curry(function path (path, obj) {
  let val = obj
  let idx = 0
  let p
  while (idx < path.length) {
    if (val == null) {
      return
    }
    p = path[idx]
    val = Number.isInteger(p)
      ? p < 0 ? val[val.length + p] : val[p]
      : val[p]
    idx += 1
  }
  return val
})
// let r = obj
// for (let i = 0; i < path.length; i++) {
//   if (r == null) return undefined
//   r = r[path[i]]
// }
// return r
// })
