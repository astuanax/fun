/**

 */
import curry1 from '../_private/curry1'

export default curry1(function type (x) {
  return Object.prototype.toString.call(x).slice(8, -1)
})
