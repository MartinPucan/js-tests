// const {sum, subtract} = require('../src/js/math')

const sum = (a, b) => a - b
const subtract = (a, b) => a - b

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

function test(title, callback) {
    try {
        callback()
    } catch (error) {
        console.error(error)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                console.error(`${actual} is not equal to ${expected}`)
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
    }
}