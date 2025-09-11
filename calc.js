/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns sum of two numbers
 */
function add(a, b) {
  return a + b;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns substraction of two numbers
 */
function sub(a, b) {
  return a - b;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns multiplication of two numbers
 */
exports.mul = function mul(a, b) {
  //thirdway to export is
  return a * b;
};

/**
 * @summary Firstline: one way to export
 * @summary Secondline: another way because behind the scenes exports = module.exports shorthand is created  
 */
module.exports.add = add;
exports.sub = sub; 

exports.isEven = function isEven(a) {
  return a % 2 == 0;
};
