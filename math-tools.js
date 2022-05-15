// function add(a,b){
//   return a+b;
// }
// let name = 'author';
// let PI = 3.14;
// exports.plus = add;
// exports.name = name;
// exports.PI = PI;
// exports.substract = function substract(a,b){return a - b;}


let calculator = {
  PI : 3.14,
  add:(a,b) => a + b,
  substract: (a,b) => a-b,
  multiply : (a,b) => a * b,
  divide : (a,b) => a / b,
};

module.exports = calculator;