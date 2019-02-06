/**
 * Returns true if an object has the property
 *
 * @function
 * @since v1.0.2
 * @sig {String} -> {Object} -> Boolean
 * @param {String} prop
 * @param {Object} obj
 * @return {Boolean}
 **/
import curry from '../util/curry'

export default curry(function has (prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
})
