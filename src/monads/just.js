let Just = function (val) {
  this._value = val
  return this
}

Just.prototype.isJust = function () {
  return true
}
Just.prototype.isNothing = function () {
  return false
}

export default Just
