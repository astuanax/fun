/**
 * @function equalsArray
 * @description Autocurried function for deep comparison of arrays
 * @param {a} x - Object to compare of type a
 * @param {a} y - Object x to compare with object x
 * @return {boolean}
 */
import curry from '../util/curry'
import not from '../util/not'
import equals from '../util/equals'

export default curry(function equalsArray (x, y) {
  if (x.length !== y.length) {
    return false
  }
  for (let i = 0; i < x.length; i++) {
    if (not(equals(x[i], y[i]))) return false
  }
  return true
})
