function convertToNumber(target) {
  // return 0 for NaN
  return Number(target) || 0;
}

function isNumbersValid(numbers) {
  return !numbers || typeof numbers !== "string"
}

const ERROR_MSG = "Field can't be empty and must be string type";

function add(numbers) {
  if (isNumbersValid(numbers)) return ERROR_MSG

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
  if (isNumbersValid(numbers)) return ERROR_MSG

  return Math.max(...numbers.split(",").map((x) => convertToNumber(x)));
}

exports.maximum = maximum;

function minimum(numbers) {
  if (isNumbersValid(numbers)) return ERROR_MSG

  return Math.min(...numbers.split(",").map((x) => convertToNumber(x)));
}

exports.minimum = minimum;
