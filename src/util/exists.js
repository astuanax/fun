/**
 * @author Len Dierickx
 */
/**
 * Created by dierickx.len on 01/04/2017.
 */
import or from './or';
import not from './not';
import isNull from '../null/is';
import isUndefined from '../undefined/is';

export default function exists(x) {
  return not(or(isNull(x), isUndefined(x)));
};
