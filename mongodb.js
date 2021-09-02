const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const databaseName = 'task-manager';

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.error('Unable connect to database!!!');
	}
	console.log('Connected correctly!!!');
	const db = client.db(databaseName);
	db.collection('users').insertOne({
		name: 'ali',
		age: 25,
	});
	// client.close();
});
