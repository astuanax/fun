/**
 * isNaN
 * Checks if number is NAN

 */
import isNumber from './is'
import and from '../util/and'

export default function isNan (x) {
  return and(isNumber(x), isNaN(x))
};
