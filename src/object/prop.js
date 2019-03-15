/**
 * @function prop
 */
import curry from '../util/curry'

export default curry(function prop (p, obj) {
  return obj[p]
})
