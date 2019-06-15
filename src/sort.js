/**
 * Returns a copy of the list, sorted according to the function.
 *
 * @func sort
 * @since v1.0.4
 * @param {Function} comp - A sorting function
 * @param {Array} a - The list to sort
 * @return {Array} a new array with its elements sorted by the comp function.
 * @example
 *
 *      const diff = function(a, b) { return a - b; };
 *      sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
import curry from './curry'

export default curry(function sort (comp, a) {
  return Array.prototype.slice.call(a, 0).sort(comp)
})
