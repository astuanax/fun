import curry from './curry'
import map from './map'

/**
 * @function aperture
 * @param n
 * @param arr
 * @returns {*}
 */
export default curry(function aperture (n, a) {
  if (a.length < n) {
    return []
  }
  const res = Array(a.length - n + 1)
  return map((item, idx) => a.slice(idx, idx + n), res)
})
