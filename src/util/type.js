/**
 * @author Len Dierickx
 */
export default (x) => {
  return Object.prototype.toString.call(x).slice(8, -1)
}
