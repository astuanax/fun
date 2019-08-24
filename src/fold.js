/**
 * Returns a single item by iterating over an array like object and call a function on each item
 *
 * @function fold
 * @description Returns a single item by iterating over an array like object and call a function on each item
 * @since v1.0.2
 * @param {Function} cb receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {*} init - the the initial value
 * @param {Array|Object} a the array like item to iterate over
 * @return {*} The accumulated value
 **/
import curry from './curry'
import arrayFold from './array/fold'
import objectFold from './object/fold'
import stringFold from './string/fold'
import type from './type'

export default curry(function fold (cb, init, a) {
  const typeMap = {
    'Object': objectFold,
    'Array': arrayFold,
    'String': stringFold
  }
  return typeMap[type(a)](cb, init, a)
})
