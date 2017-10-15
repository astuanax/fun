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
import isObject from '../object/is'
import isArray from '../array/is'

const equals = curry((x, y) => {
  if (identical(x, y)) {
    return true
  }
  if (not(exists(x)) || not(exists(y))) {
    return false
  }
  if (type(x) !== type(y)) {
    return false
  }
  if (x.constructor !== y.constructor) {
    return false
  }
  if (isArray(x)) {
    var len = x.length
    if (len !== y.length) {
      return false
    }
    for (var i = 0; i < len; i++) {
      if (equals(x[i], y[i])) {
        return true
      }
    }

    var len1 = x.length
    var len2 = y.length
    if (len1 === 0 && len2 === 0) {
      return true
    }
    if (len1 === len2) {
      for (var key = 0; key < len1; key++) {
        // not sorted
        if (not(identical(x[key], y[key]))) {
          return false
        }
        return true
      }
    }
  } else if (isObject(x)) {
    if (Object.keys(x).length === 0 && Object.keys(y).length === 0) {
      return true
    }
    for (var keyX in x) {
      if (equals(x[keyX], y[keyX])) {
        return true
      }
    }
    for (var keyY in y) {
      if (not(exists(x[keyY])) && not(exists(y[keyY]))) {
        return false
      }
    }
  }

  return false
})

export default equals
