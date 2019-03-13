/**
 *
 */
import isDate from './is'

export default function isValid (x) {
  // noinspection JSCheckFunctionSignatures
  return isDate(x) && isFinite(x.valueOf())
};
