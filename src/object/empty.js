/**
 * Created by dierickx.len on 01/04/2017.
 */
import isObject from './is';

export default (x) => {
  return isObject(x) ? {} : void 0;
};
