/**

 * equals
 * checks for equality
 */
import curry from '../util/curry'
import identical from '../util/identical'
import isObject from '../object/is'
import isArray from '../array/is'
import union from '../array/union'

const merge = curry((objL, objR) => {
  let result = Object.assign({}, objL)

  if (identical(objL, objR)) {
    return Object.assign({}, objL)
  }
  for (let key in objR) {
    if (!Object.prototype.hasOwnProperty.call(objR, key)) {
      continue
    }
    const oldValue = objR[key]
    const newValue = objL[key]

    if (isObject(oldValue) && isObject(newValue)) {
      result[key] = merge(oldValue, newValue)
    } else if (isArray(newValue)) {
      result[key] = union(newValue, oldValue)
    } else {
      result[key] = oldValue // TODO: this is a reference, should be clone
    }
  }
  return result
})

export default merge
