const {subtract} = require('/src/js/math')

test('test substract', () => {
    const result = subtract(18, 10)
    const expected = 8
    expect(result).toBe(expected)
})