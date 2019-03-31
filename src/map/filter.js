/**
 * @function mapFilter
 * @private
 *
 */
import curry from '../curry'

export default curry(function mapFilter (fn, m) {
  let r = new Map()

  let it = m.entries()
  let result = it.next()

  while (!result.done) {
    const k = result.value[0]
    const v = result.value[1]
    if (fn(k, v)) r.set(k, v)
    result = it.next()
  }

  // Limited browser support
  // m.forEach((v, k) => {
  //   if (fn(k, v)) r.set(k, v)
  // })

  // babel transpile issues
  // for (const [k, v] of m.entries()) {
  //
  // }
  return r
})
