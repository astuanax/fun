/**

 * @function equals
 * @description Autocurried function that checks for equality of 2 items
 * @param {*} x - Left side of the equality check
 * @param {*} y - Right side of the equality check
 * @return {boolean}
 * @example
 *
 * const nan = Number.NaN
 * equal(nan, nan) // returns true
 *
 * const arr1 = [0, 1, 2, 3]
 * const arr2 = [null, 1, 2, 3]
 * equals(arr1, arr2) // returns false
 *
 * equals(new Object({'a': 0, 'b': 1}), {'a': 0, 'b': 1}) // true
 *
 */
import curry from './curry'
import exists from './exists'
import identical from './identical'
import type from './type'
import not from './not'
import or from './or'
import isObject from './object/is'
import isArray from './array/is'
import isBoolean from './boolean/is'
import isNumber from './number/is'
import isString from './string/is'
import isDate from './date/is'
import equalsArray from './array/equals'
import equalsObject from './object/equals'

export default curry(function equals (x, y) {
  if (identical(x, y)) return true

  if (type(x) !== type(y)) return false

  if (or(not(exists(x)), not(exists(y)))) return false

  if (x.constructor !== y.constructor) return false

  if (isString(x) || isBoolean(x) || isNumber(x) || isDate(x)) {
    return identical(x.valueOf(), y.valueOf())
  }
  if (isArray(x)) {
    return equalsArray(x, y)
  } else if (isObject(x)) {
    return equalsObject(x, y)
  }
  return false
})
