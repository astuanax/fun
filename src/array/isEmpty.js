/**
 * Created by dierickx.len on 01/04/2017.
 */
import empty from './empty'
import identity from '../util/identity'

export default (x) => {
  return identity(empty(x))(x)
}
