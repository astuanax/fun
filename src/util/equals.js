/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
import curry from './curry'
import exists from './exists'
import identical from './identical'
import type from './type'
import not from './not'
import and from './and'
import or from './or'
import isObject from '../object/is'
import isEmptyObject from '../object/isEmpty'
import isArray from '../array/is'
import isBoolean from '../boolean/is'
import isNumber from '../number/is'
import isDate from '../date/is'

const equals = curry((x, y) => {
  if (identical(x, y)) return true

  if (type(x) !== type(y)) return false

  if (or(not(exists(x)), not(exists(y)))) return false

  if (x.constructor !== y.constructor) return false

  if (isBoolean(x) || isNumber(x) || isDate(x)) {
    return identical(x.valueOf(), y.valueOf())
  }

  let res = true
  if (isArray(x)) {
    if (x.length !== y.length) {
      return false
    }
    for (var i = 0; i < x.length; i++) {
      if (not(equals(x[i], y[i]))) res = false
    }
    return res
  } else if (isObject(x)) {
    if (and(isEmptyObject(x), isEmptyObject(y))) return true

    for (var keyX in x) {
      if (not(equals(x[keyX], y[keyX]))) res = false
    }
    for (var keyY in y) {
      if (not(exists(x[keyY])) && exists(y[keyY])) res = false
    }
    return res
  }
})

export default equals
