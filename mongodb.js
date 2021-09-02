const { MongoClient, ObjectId } = require('mongodb');

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

	usersCollection
		.deleteMany({ age: 25 })
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
});
