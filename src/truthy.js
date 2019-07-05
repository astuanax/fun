import exists from './exists'
import curry1 from './_private/curry1'

/**
 * @function truthy
 * @desc Validates if a value exists and is not false
 * @param {*} x - Any valid javascript value
 * @example
 *
 * truthy([])        // true
 * truthy(0)         // true
 * truthy(-1)        // true
 * truthy(false)     // false
 * truthy(null)      // false
 * truthy(undefined) // false
 *
 */

export default curry1(function truthy (x) {
  return (x !== false) && exists(x)
})
