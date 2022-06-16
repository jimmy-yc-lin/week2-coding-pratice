const calculator = require('./calculator')

test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
});

/*
    Please implement the rest of tests
    - subtract
    - multiply
    - divide
    - maximum
    - minimum
*/