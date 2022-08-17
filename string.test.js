const {strLen, strCheck, reverseString, capitalize} = require('./string')

test('String count for "London" should return 6', () => {
  expect(strLen('London')).toBe(6);
});

test('String count for "capival" should return 7', () => {
  expect(strLen('capival')).toBe(7);
});

test('String count for "random" should return 6', () => {
  expect(strLen('random')).toBe(6);
});

test('Empty string " " should return false', () => {
  expect(strCheck(' ')).toBeFalsy();
});

test('string "Seven" should return true', () => {
  expect(strCheck('seven')).toBeTruthy();
});

test('string "denomination" should return false', () => {
  expect(strCheck('denomination')).toBeFalsy();
});

test('reverse string for lagos should be sogal', () => {
  expect(reverseString('lagos')).toBe('sogal');
});

test('jollof to be rewritten as Jollof', () => {
  expect(capitalize('jollof')).toBe('Jollof');
});

test('nigeria to be rewritten as Nigeria', () => {
  expect(capitalize('nigeria')).toBe('Nigeria');
});
