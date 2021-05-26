export function test(title, callback) {
    try {
        callback()
    } catch (error) {
        console.error(error)
    }
}

export function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                console.error(`${actual} is not equal to ${expected}`)
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
    }
}