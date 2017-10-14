/**
 * isNaN
 * Checks if number is NAN
 * @author Len Dierickx
 */
import isNumber from './is'
import and from '../util/and'

export default (x) => {
  return and(isNumber(x), isNaN(x))
}
