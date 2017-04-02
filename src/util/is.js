/**
 * Created by len dierickx
 */
import curry from './curry'
import type from './type'

export default curry((Ctor, val) => {
  return type(val) === Ctor
})
