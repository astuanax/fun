/**
 * @function truthy
 */
import exists from './exists'

export default function truthy (x) {
  return (x !== false) && exists(x)
};
