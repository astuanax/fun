/**
 * @function isNaN
 * @description Checks if number is NAN

 */
import isNumber from './is'
import and from '../and'

export default function isNan (x) {
  return and(isNumber(x), isNaN(x))
};
