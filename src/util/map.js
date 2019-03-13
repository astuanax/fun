/**
 * Maps over an iterable and applies a function
 *
 * @function map
 * @description Autocurried function which maps over an iterable.
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> b -> b
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 **/
import curry from '../util/curry'
import arrayMap from '../array/map'
import objectMap from '../object/map'
import mapMap from '../map/map'
import stringMap from '../string/map'
import type from '../util/type'

export default curry(function map (cb, a) {
  switch (type(a)) {
  // switch (Object.prototype.toString.call(a)) {
    case 'Function':
      return curry(function () {
        return cb.call(this, a.apply(this, arguments))
      })
    case 'Object':
      return objectMap(cb, a)
    case 'String':
      return stringMap(cb, a)
    case 'Map':
      return mapMap(cb, a)
    default:
      return arrayMap(cb, a)
  }
})
