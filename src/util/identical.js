/**
 * @author Len Dierickx
 * identical
 * checks for identintical items
 */
import curry from './curry'
import isNan from '../number/isNan'

export default curry((x, y) => {
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y
  }
  if (x === y) {
    return true
  }
  if (isNan(x) && isNan(y)) {
    return true
  }
  return false
})
