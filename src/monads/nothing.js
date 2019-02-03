let Nothing = function () {
};

Nothing.prototype.isJust = function () {
  return false;
};
Nothing.prototype.isNothing = function () {
  return true;
};

export default Nothing;
