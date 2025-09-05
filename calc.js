function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.mul = function mul(a, b) {
  //thirdway to export is
  return a * b;
};

module.exports.add = add; //one way to export
exports.sub = sub; //another way because behind the scenes exports = module.exports shorthand is created
