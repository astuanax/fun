/**
 * @function arrayFilter
 * @private
 *
 */
import curry from '../util/curry'

export default curry(function arrayFilter (fn, a) {
  var r = []
  for (let i = 0; i < a.length; i++) {
    if (fn(a[i])) r.push(a[i])
  }
  return r
})
