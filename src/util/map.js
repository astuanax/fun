/**
 * Maps over an array and applies a function
 *
 * @function
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
  const r = {
    'Object': objectMap,
    'String': stringMap,
    'Array': arrayMap,
    'Map': mapMap,
    'Function': curry(function _fnMap () {
      return cb.call(this, a.apply(this, arguments))
    })
  }
  console.log(type(a))
  console.log(cb)
  console.log(a)
  console.log(r[type(a)](cb, a))

  return r[type(a)](cb, a)
})
