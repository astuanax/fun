/**
 * Returns the own keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/
import curry from '../util/curry'

export default curry(function keys (a) {
  return Object.keys(Object(a))
})
