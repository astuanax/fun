/**
 * Modifies an item in an array using the provided function
 *
 * @function
 * @since v1.0.2
 * @sig (a -> a) -> ((a -> [a]) -> [a] -> num) -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Function} pred - The predicate that returns the index if found
 * @param {Iterable} [a]
 * @return {Iterable} [a]
 **/
import curry from '../util/curry'
import adjust from '../util/adjust'
import findIndex from '../util/findIndex'

export default curry(function adjustIn (fn, pred, a) {
  return adjust(fn, findIndex(pred, a), a)
})
