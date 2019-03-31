/**
 * Created by dierickx.len on 01/04/2017.
 */
import is from '../is'
const isFunction = is('Function')

export default function isIter (iter) {
  return isFunction(iter[Symbol.iterator])
}
