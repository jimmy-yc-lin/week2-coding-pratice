const calculator = require("./calculator");

// add
test("string with a single number should result in the number itself", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("-1")).toBe(-1);
    expect(calculator.add("0.1")).toBe(0.1);
    expect(calculator.add("-0.1")).toBe(-0.1);
});

test('divide number by "," and add all of numbers', () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
    expect(calculator.add("0.1,1,2.2")).toBeGreaterThanOrEqual(3.3);
    expect(calculator.add("-1,-2,-3")).toBe(-6);
});

test('divide number by "," and add all of numbers, turn NaN value to 0', () => {
    expect(calculator.add("test number")).toBe(0);
    expect(calculator.add("1zzzz0,123-test,-20-")).toBe(0);
});

test("throw the error message for falsy value or not string type", () => {
    const errorMsg = "Field can't be empty and must be string type";

    expect(calculator.add("")).toBe(errorMsg);
    expect(calculator.add(123123)).toBe(errorMsg);
    expect(calculator.add({})).toBe(errorMsg);
    expect(calculator.add([])).toBe(errorMsg);
    expect(calculator.add(false)).toBe(errorMsg);
    expect(calculator.add()).toBe(errorMsg);
    expect(calculator.add(null)).toBe(errorMsg);
});

// subtract
test("subtract two numbers", () => {
    expect(calculator.subtract("50", "10")).toBe(40);
    expect(calculator.subtract("10", "0.1")).toBe(9.9);
    expect(calculator.subtract("10", "10")).toBe(0);
    expect(calculator.subtract("-10", "10")).toBe(-20);
    expect(calculator.subtract("10", "-10")).toBe(20);
    expect(calculator.subtract("-10", "-10")).toBe(0);
});

test("subtract two numbers and turn NaN value to 0", () => {
    expect(calculator.subtract("50", "test")).toBe(50);
    expect(calculator.subtract("test", "10")).toBe(-10);
    expect(calculator.subtract("test", "test2")).toBe(0);
    expect(calculator.subtract(null)).toBe(0);
    expect(calculator.subtract()).toBe(0);
});

// multiply
test("multiply two numbers", () => {
    expect(calculator.multiply("50", "10")).toBe(500);
    expect(calculator.subtract("9.9", "0.1")).toBe(9.8);
    expect(calculator.multiply("10", "0")).toBe(0);
    expect(calculator.multiply("0", "10")).toBe(0);
    expect(calculator.multiply("-10", "10")).toBe(-100);
    expect(calculator.multiply("10", "-10")).toBe(-100);
    expect(calculator.multiply("-10", "-10")).toBe(100);
});

test("multiply two numbers and turn NaN value to 0", () => {
    expect(calculator.multiply("50", "test")).toBe(0);
    expect(calculator.multiply("test", "10")).toBe(0);
    expect(calculator.multiply("test", "test2")).toBe(0);
    expect(calculator.multiply(null)).toBe(0);
    expect(calculator.multiply()).toBe(0);
});

// divide
test("divide two numbers", () => {
    expect(calculator.divide("50", "10")).toBe(5);
    expect(calculator.divide("10", "0.1")).toBe(100);
    expect(calculator.divide("11", "2")).toBe(5.5);
    expect(calculator.divide("0", "10")).toBe(0);
    expect(calculator.divide("-10", "10")).toBe(-1);
    expect(calculator.divide("10", "-10")).toBe(-1);
    expect(calculator.divide("-10", "-10")).toBe(1);
});

test("divide two numbers and turn NaN value to 0", () => {
    expect(calculator.divide("test", "10")).toBe(0);
    expect(calculator.divide("test", "123")).toBe(0);
});

test("throw error message when divisor is 0", () => {
    const errorMsg = "divisor can't be 0";

    expect(calculator.divide("test", "0")).toBe(errorMsg);
    expect(calculator.divide("test", "test2")).toBe(errorMsg);
    expect(calculator.divide("10", "test2")).toBe(errorMsg);
});


// maximum
test("find to maximum number", () => {
    expect(calculator.maximum("1,2,3,4,5")).toBe(5);
    expect(calculator.maximum("9,2,3")).toBe(9);
    expect(calculator.maximum("10")).toBe(10);
    expect(calculator.maximum("0")).toBe(0);
    expect(calculator.maximum("-1,-2,-3,-4")).toBe(-1);
});

test("find to maximum number, turn NaN value to 0", () => {
    expect(calculator.maximum("test")).toBe(0);
    expect(calculator.maximum("test,test2,test3")).toBe(0);
    expect(calculator.maximum("-1,-2,test")).toBe(0);
});

test("throw the error message for falsy value or not string type", () => {
    const errorMsg = "Field can't be empty and must be string type";

    expect(calculator.maximum("")).toBe(errorMsg);
    expect(calculator.maximum(123123)).toBe(errorMsg);
    expect(calculator.maximum({})).toBe(errorMsg);
    expect(calculator.maximum([])).toBe(errorMsg);
    expect(calculator.maximum(false)).toBe(errorMsg);
    expect(calculator.maximum()).toBe(errorMsg);
    expect(calculator.maximum(null)).toBe(errorMsg);
});

// minimum
test("find to minimum number", () => {
    expect(calculator.minimum("1,2,3,4,5")).toBe(1);
    expect(calculator.minimum("9,2,3")).toBe(2);
    expect(calculator.minimum("10")).toBe(10);
    expect(calculator.minimum("0")).toBe(0);
    expect(calculator.minimum("-1,-2,-3,-4")).toBe(-4);
});

test("find to minimum number, turn NaN value to 0", () => {
    expect(calculator.minimum("test")).toBe(0);
    expect(calculator.minimum("test,test2,test3")).toBe(0);
    expect(calculator.minimum("-1,-2,test")).toBe(-2);
});

test("throw the error message for falsy value or not string type", () => {
    const errorMsg = "Field can't be empty and must be string type";

    expect(calculator.minimum("")).toBe(errorMsg);
    expect(calculator.minimum(123123)).toBe(errorMsg);
    expect(calculator.minimum({})).toBe(errorMsg);
    expect(calculator.minimum([])).toBe(errorMsg);
    expect(calculator.minimum(false)).toBe(errorMsg);
    expect(calculator.minimum()).toBe(errorMsg);
    expect(calculator.minimum(null)).toBe(errorMsg);
});

