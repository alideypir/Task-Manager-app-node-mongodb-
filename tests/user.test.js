const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
	name: 'ali',
	email: 'a@a.a',
	password: '12345678',
}

beforeEach(async () => {
	await User.deleteMany()
	await new User(userOne).save()
})

test('should signup a new user', async () => {
	await request(app)
		.post('/users')
		.send({
			name: 'ali',
			email: 'ali@ali.com',
			password: '12345678',
		})
		.expect(201)
})
