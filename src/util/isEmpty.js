/**

 * empty
 * Returns the empty equivalent of the first argument
 */
import empty from './empty'
import exists from './exists'
import equals from './equals'

export default function isEmpty (x) {
  return exists(x) && equals(x, empty(x))
};
