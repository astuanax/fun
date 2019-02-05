/**
 * @author Len Dierickx
 */
export default function type (x) {
  return Object.prototype.toString.call(x).slice(8, -1)
};
