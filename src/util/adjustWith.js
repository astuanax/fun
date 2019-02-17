/**
 * Modifies an item in an array using the provided function
 *
 * @function
 * @since v1.0.2
 * @sig (a -> a) -> ((a -> [a]) -> [a] -> num) -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Function} pred - The predicate that returns the indexes if found
 * @param {Iterable} [a]
 * @return {Iterable} [a]
 **/
import curry from '../util/curry'
import map from '../util/map'

export default curry(function adjustWith (fn, pred, a) {
  const _fn = x => {
    if (pred(x)) {
      return fn(x)
    }
    return x
  }
  return map(_fn, Array.prototype.slice.call(a))
})
