/**

 * or
 * Returns true if one or the other is true
 */
import curry from './curry'

export default curry(function or (x, y) {
  return x || y
})
