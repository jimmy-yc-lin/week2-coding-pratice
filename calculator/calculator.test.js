const calculator = require("./calculator");

// add
test("string with a single number should result in the number itself", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("-1")).toBe(-1);
    expect(calculator.add("0.1")).toBe(0.1);
    expect(calculator.add("-0.1")).toBe(0.1);
});

test('divide number by "," and add all of numbers', () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
    expect(calculator.add("0.1,1,2.2")).toBe(3.3);
    expect(calculator.add("-1,-2,-3")).toBe(-5);
});

test('divide number by "," and add all of numbers, turn NaN value to 0', () => {
    expect(calculator.add("test number")).toBe(0);
    expect(calculator.add("1zzzz0,123-test,-20-")).toBe(10);
});

test("throw the error message for falsy value and not string type", () => {
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

/*
    Please implement the rest of tests
    - subtract
    - multiply
    - divide
    - maximum
    - minimum
*/
