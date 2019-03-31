/**
 * @function prop
 */
import curry from '../curry'

export default curry(function prop (p, obj) {
  return obj[p]
})
