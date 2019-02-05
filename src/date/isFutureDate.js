/**
 * Created by dierickx.len on 09/03/2017.
 */
import diffDate from './diffDate'

export default (d) => {
  return diffDate(new Date())(d) < 0
}
