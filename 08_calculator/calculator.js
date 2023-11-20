const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	if(arr[0] === '')
    return sum;
  else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
};

const multiply = function(arr) {
  let result = 0;
  if(arr[0] === '')
    return result;
  else {
    result = 1;
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i];
    }
  }
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if(a === 0 || a === 1)
    return 1;
  else
    return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
