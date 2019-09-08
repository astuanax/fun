/**
 * @function filter
 * @description Autocurried function that filters Objects, Arrays and Maps
 *
 */
import curry from './curry'
import arrayFilter from './array/filter'
import objectFilter from './object/filter'
import mapFilter from './map/filter'
// TODO
// import setFilter from '../set/filter'
import type from './type'

export default curry(function filter (fn, a) {
  switch (type(a)) {
    // switch (Object.prototype.toString.call(a)) {
    // case 'Function':
    //   return curry(function () {
    //     return cb.call(this, a.apply(this, arguments))
    //   })
    case 'Object':
      return objectFilter(fn, a)
    // case 'String':
    //   return stringMap(cb, a)
    case 'Map':
      return mapFilter(fn, a)
    // case 'Set':
    //   return setFilter(fn, a)
    default:
      return arrayFilter(fn, a)
  }
})
