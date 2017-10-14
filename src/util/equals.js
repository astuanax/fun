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
  if (isObject(x)) {
    if (Object.keys(x).length === 0 && Object.keys(y).length === 0) {
      return true
    } else {
      console.warn('No object comparison')
    }
  }
  if (isArray(x)) {
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
  }
  return false
})

export default equals
// export default curry((x, y) = > {
//     if (identical(x, y)) {
//         return true
//     }
    // if (x == null || y == null) {
    //         return false
    //     }
    //     if (type(x) !== type(y)) {
    //         return false
    //     }
    //     if (x.constructor !== y.constructor) {
    //         return false;
    //     }
    // for (var p in x) {
    //         if (not(x.hasOwnProperty(p))) {
    //             continue
    //         }
    //
    //         if (not(y.hasOwnProperty(p))) {
    //           // other properties were tested using x.constructor === y.constructor
    //           return false
    //         }
    //
    //         if (identical(x[p],y[p])) {
    //             // allows to compare x[ p ] and y[ p ] when set to undefined
    //             continue
    //         }
    //
    //         if (not(isObject(x[p]))) {
    //           return false
    //         }
    //         // Numbers, Strings, Functions, Booleans must be strictly equal
    //         if () return false;
    //         // Objects and Arrays must be tested recursively
    //     }
    //
    //     for (p in y) {
    //         if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
    //         // allows x[ p ] to be set to undefined
    //     }
//     return false
// })
