const Calculator = require('./calculator');

describe('calculator', () => {
  const calculator = new Calculator;

  test('add 1 and 2 to get 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('add 5 and 5 to get 10', () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test('add 150000 and 50000 to get 200000', () => {
    expect(calculator.add(150000, 50000)).toBe(200000);
  });

  test('subtract 50000 and 150000 to get 100000', () => {
    expect(calculator.subtract(150000, 50000)).toBe(100000);
  });

  test('subtract 7 and 2 to get -5', () => {
    expect(calculator.subtract(2, 7)).toBe(-5);
  });

  test('subtract 2 and 12 to get 10', () => {
    expect(calculator.subtract(12, 2)).toBe(10);
  });

  test('divide 12 by 2 to get 6', () => {
    expect(calculator.divide(12, 2)).toBe(6);
  });

  test('divide 22 by 22 to get 1', () => {
    expect(calculator.divide(22, 22)).toBe(1);
  });

  test('divide 21 by 7 to get 3', () => {
    expect(calculator.divide(21, 7)).toBe(3);
  });

  test('multiply 7 by 7 to get 49', () => {
    expect(calculator.multiply(7, 7)).toBe(49);
  });

  test('multiply 700 by 1 to get 700', () => {
    expect(calculator.multiply(700, 1)).toBe(700);
  });

  test('multiply 1000 by 0 to get 0', () => {
    expect(calculator.multiply(1000, 0)).toBe(0);
  });
});