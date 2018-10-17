/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
import curry from './curry'
import exists from './exists'
import not from './not'
import and from './and'
import isEmptyObject from '../object/isEmpty'

const equals = curry((x, y) => {
  if (and(isEmptyObject(x), isEmptyObject(y))) return true

  for (var keyX in x) {
    if (not(equals(x[keyX], y[keyX]))) return false
  }

  for (var keyY in y) {
    if (not(exists(x[keyY])) && exists(y[keyY])) return false
  }

  return true
})

export default equals
