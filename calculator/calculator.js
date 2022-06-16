function convertToNumber(target) {
  // return 0 for NaN
  return Number(target) || 0;
}

function add(numbers) {
  if (!numbers) return "Field can't be empty";

  return numbers
    .split(",")
    .map((x) => convertToNumber(x))
    .reduce((prev, curr) => prev + curr, 0);
}

exports.add = add;

function subtract(minuend, subtrahend) {
  return convertToNumber(minuend) - convertToNumber(subtrahend);
}

exports.subtract = subtract;

function multiply(multiplier, multiplicand) {
  return convertToNumber(multiplier) * convertToNumber(multiplicand);
}

exports.multiply = multiply;

function divide(dividend, divisor) {
  const divisorNumber = convertToNumber(divisor);
  if (divisorNumber === 0) return "divisor can't be 0";

  return convertToNumber(dividend) / convertToNumber(divisor);
}

exports.divide = divide;

function maximum(numbers) {
  console.log(numbers);
  if (!numbers) return "Field can't be empty";

  return Math.max(...numbers.split(",").map((x) => convertToNumber(x)));
}

exports.maximum = maximum;

function minimum(numbers) {
  if (!numbers) return "Field can't be empty";

  return Math.min(...numbers.split(",").map((x) => convertToNumber(x)));
}

exports.minimum = minimum;
