import curry from './curry'

/**
 * @function zipObj
 * @param {array} a
 * @param {array} b
 * @return {object}
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
