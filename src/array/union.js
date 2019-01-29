/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
import curry from '../util/curry';

export default curry((arrayL, arrayR) => {
  return Array.from(new Set(arrayL.concat(arrayR)));
});
