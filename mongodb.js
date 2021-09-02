const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const databaseName = 'task-manager';

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.error('Unable connect to database!!!');
	}
	console.log('Connected correctly!!!');
	const db = client.db(databaseName);

	const usersCollection = db.collection('users');
	const tasksCollection = db.collection('tasks');

	usersCollection.find({ age: 25 }).toArray((error, users) => {
		if (error) return console.error('unable to find users');
		console.log(users);
	});
});
