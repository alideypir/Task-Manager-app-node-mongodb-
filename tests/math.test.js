const { calculateTip } = require('../src/math')

test('should calculate total with tip', () => {
	const total = calculateTip(10, 0.3)
	expect(total).toBe(13)
})

test('should calculate total with default tip', () => {
	expect(calculateTip(10)).toBe(12.5)
})

test('async test', (done) => {
	setTimeout(() => {
		expect(1).toBe(1)
        done()
	}, 2000)
})
