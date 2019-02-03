/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
import curry from '../util/curry';
import exists from '../util/exists';
import not from '../util/not';
import and from '../util/and';
import isEmptyObject from './isEmpty';
import equals from '../util/equals';

export default curry((x, y) => {
  if (and(isEmptyObject(x), isEmptyObject(y))) return true;

  for (let keyX in x) {
    // noinspection JSUnfilteredForInLoop
    if (not(equals(x[keyX], y[keyX]))) return false;
  }

  for (let keyY in y) {
    if (not(exists(x[keyY])) && exists(y[keyY])) return false;
  }

  return true;
});
