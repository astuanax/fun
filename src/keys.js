/**
 * Returns the keys of the provided object or iterator
 *
 * @function keys
 * @description Autocurried function which returns the keys of the provided object or iterator
 * @since v1.0.2
 * @sig obj -> [*]
 * @param {Object} obj - Obj from zhich to take the keys
 * @return {Iterable}
 **/
import curry from './curry'
import objectKeys from './object/keys'
import mapKeys from './map/keys'
import type from './type'

export default curry(function map (obj) {
  switch (type(obj)) {
    case 'Map':
      return mapKeys(obj)
    default:
      return objectKeys(obj)
  }
})
