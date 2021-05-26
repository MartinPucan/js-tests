import { test, expect } from './functions/index'
const {sum, subtract} = require('../src/js/math')
// const {divide, multiplication} = require('../src/js/math')

let result, expected

result = sum(3, 7)
expected = 10
// expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
// expect(result).toBe(expected)

test('test substract', () => {
    const result = subtract(18, 10)
    const expected = 8
    expect(result).toBe(expected)
})