/**
 * Created by dierickx.len on 18/03/2017.
 */
import isDate from './is';

export default function isValid(x) {
  // noinspection JSCheckFunctionSignatures
  return isDate(x) && isFinite(x.valueOf());
};
