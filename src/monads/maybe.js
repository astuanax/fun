import Just from './Just'
import Nothing from './Nothing'

let Maybe = function (val) {
  this.__value = val
}

Maybe.of = function (val) {
  if (val instanceof Maybe) return val
  if (this instanceof Maybe) {
    this.__value = val
  } else {
    return new Maybe(val)
  }
}

Maybe.prototype.getOrElse = function (n) {
  return this.isNothing() ? n : this.__value
}

Maybe.prototype.map = function (f) {
  if (this.isNothing()) {
    return Maybe.of(null)
  }
  return Maybe.of(f(this.__value))
}

Maybe.prototype.ap = function (m) {
  return m.map(this.__value)
}

Maybe.prototype.isNothing = function () {
  return (this.__value == null)
}

Maybe.prototype.isJust = function () {
  return !this.isNothing()
}

Maybe.prototype.Nothing = function () {
  return new Nothing()
}

Maybe.prototype.Just = function () {
  return new Just(this._value)
}

export default Maybe
