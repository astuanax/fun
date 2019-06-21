import curry from './curry'

/**
 * @function zipObj
 * @desc Autocurried function that zips 2 Arrays into 1 Object
 * @param {Array} a - Array containing the keys of the returned object
 * @param {Array} b - Array containing the values of the returned object
 * @return {Object}
 * @example
 *
 * const keys = ['a', 'b', 'c']
 * const values = [0, 1, 2]
 * zipObj(keys, values // {'a': 0, 'b': 1, 'c': 2}
 *
 */

export default curry(function zipObj (a, b) {
  var i = 0
  var l = Math.min(a.length, b.length)
  var r = {}
  while (i < l) {
    r[a[i]] = b[i]
    i += 1
  }
  return r
})
