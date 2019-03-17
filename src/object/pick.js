/**
 * @function pick
 * @description returns a new bject with only the props that are provided
 * @param {Array} props - Array of property names
 * @param {Object} obj - The object from which to take the properties
 * @return {Object}
 */
import curry from '../util/curry'

export default curry(function pick (props, obj) {
  const r = {}
  let i = 0
  while (i < props.length) {
    if (props[i] in obj) {
      r[props[i]] = obj[props[i]]
    }
    i += 1
  }
  return r
})
