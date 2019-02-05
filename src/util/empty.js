/**
 * @author Len Dierickx
 * empty
 * Returns the empty equivalent of the first argument
 */
import isArray from '../array/is'
import isObject from '../object/is'
import isString from '../string/is'

export default function empty (x) {
  if (isArray(x)) {
    return []
  }
  if (isString(x)) {
    return ''
  }
  if (isObject(x)) {
    return {}
  }
  return void 0
};
