/**
 * Adds a specified index to iterate a collection
 *
 * @function addIndex
 * @summary Adds a specified index to iterate a collection
 * @param {Function} f Iterator function
 * @param {Function} g Function to which to add the index
 * @param {Array} a The array on which to work
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const array = [1, 2, 3, 4]
 * addIndex(map, (v, i) => v + i, array) // [1, 3, 5, 7]
 *
 */
import curry from './curry'

export default curry(function addIndex (f, g, a) {
  let i = 0
  return f(
    function (v) {
      return g(v, i++)
    },
    a
  )
})
