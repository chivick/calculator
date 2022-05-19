const { parseFloat } = require("core-js/core/number");

function getVals(x, y) {
  return [parseInt(x), parseInt(y)];
}

function add(x, y) {
  let [a, b] = getVals(x, y);
  return a + b;
}


//this is the next function ... 
function substract(x, y) {
  return parseInt(x) - parseInt(y);
}