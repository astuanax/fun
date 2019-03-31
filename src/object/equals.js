/**

 * equals
 * checks for equality
 */
import curry from '../curry'
import exists from '../exists'
import not from '../not'
import equals from '../equals'

export default curry((x, y) => {
  for (let keyX in x) {
    // noinspection JSUnfilteredForInLoop
    if (not(equals(x[keyX], y[keyX]))) return false
  }

  for (let keyY in y) {
    if (not(exists(x[keyY])) && exists(y[keyY])) return false
  }

  return true
})
