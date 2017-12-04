/**
 * @author Len Dierickx
 * equals
 * checks for equality
 */
import curry from '../util/curry'

export default curry((obj, names) => {
  let result = {}
  Object.keys(obj).filter((key) => {
    return names.indexOf(key) === -1
  }).forEach((key) => {
    result[key] = obj[key]
  })
  return result
})
