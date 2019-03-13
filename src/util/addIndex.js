/**
 * @function addIndex
 * @summary Adds a specified index to iterate a collection
 * @description The addIndex function is notnecessary for the map functions in the fun.js library as they behave the sa,e as the native javascript functions
 * @param {Function} f Iterator function
 * @param {Function} g Function to which to add the index
 * @param {Array} a The array on which to work
 * @since 1.0.2
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
