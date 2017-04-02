/**
 * Created by len dierickx
 */
import curry from './curry'

export default curry((a, b) => {
  return !!a && !!b && !(a < b || b < a)
})
