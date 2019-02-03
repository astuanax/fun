/**
 * @author Len Dierickx
 * union
 */
import curry from '../util/curry';

export default curry(function unionArray(arrayL, arrayR) {
  return Array.from(new Set(arrayL.concat(arrayR)));
});
