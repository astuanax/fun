/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
import curry from './curry'
import not from './not'

const equals = curry((x, y) => {
  if (x.length !== y.length) {
    return false
  }
  for (var i = 0; i < x.length; i++) {
    if (not(equals(x[i], y[i]))) return false
  }
  return true
})

export default equals
