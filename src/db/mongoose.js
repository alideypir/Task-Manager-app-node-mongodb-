const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://localhost:27017/task-manager-api');

const User = mongoose.model('user', {
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		},
	},
	password: {
		type: String,
		required: true,
		minLength: 7,
		trim: true,
		validate(value) {
			if (value.toLowerCase().includes('password')) {
				throw new Error('Password invalid');
			}
		},
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		},
	},
});

const me = new User({
	name: '     Ahmad    ',
	email: '   ahmad@g.com',
	password: 'hahahahahahaha',
});

// me.save()
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

const Task = mongoose.model('task', {
	description: {
		type: String,
		required: true,
		trim: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const task = new Task({
	description: '      Learn mongoose333    ',
});
task.save()
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});
