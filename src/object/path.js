import curry from '../curry'

/**
 * @function path
 * @desc Returns the value of a property identified by a number of nested key values
 * @param {Array} path - Array of key values
 * @param {Object|Array} An object or an array from which to retrieve the keys
 * @example
 *
 * let t = {
 *     a: {
 *         b : [0, 1]
 *     },
 *     b : 1
 * }
 *
 * const v = path(['a', 'b', 0], t)
 * v === 0
 */
export default curry(function path (path, obj) {
  let val = obj
  let idx = 0
  let p
  while (idx < path.length) {
    if (val == null) {
      return undefined
    }
    p = path[idx]
    val = Number.isInteger(p) && p < 0 
      ? val[val.length + p]
      : val[p]
    idx += 1
  }
  return val
})
