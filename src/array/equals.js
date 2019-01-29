/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
import curry from '../util/curry';
import not from '../util/not';
import equals from '../util/equals';

export default curry((x, y) => {
  if (x.length !== y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (not(equals(x[i], y[i]))) return false;
  }
  return true;
});
