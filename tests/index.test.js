import { test, expect } from './functions/index'
import { sum } from '../src/js/math'

let result, expected

result = sum(3, 7)
expected = 10
// expect(result).toBe(expected)

// result = subtract(7, 3)
// expected = 4
// expect(result).toBe(expected)

test('test substract', () => {
    const result = sum(18, 10)
    const expected = 8
    expect(result).toBe(expected)
})