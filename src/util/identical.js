/**

 * @function identical
 * @description checks for identintical items
 */
import curry from './curry'
import isNan from '../number/isNan'

export default curry(function identical (x, y) {
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y
  }
  if (x === y) {
    return true
  }
  return !!(isNan(x) && isNan(y))
})
