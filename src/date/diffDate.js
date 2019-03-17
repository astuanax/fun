/**
 * @function diffDate
 * @description Returns the difference between 2 dates in millisecond
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @return {number} REturn the difference in milliseconds
 */
import curry from '../util/curry'

export default curry(function diffDate (start, end) {
  return (new Date(start).getTime() - new Date(end).getTime())
})
