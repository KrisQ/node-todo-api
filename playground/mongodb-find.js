const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log(err);
	}
	console.log('Connected to MongDB server');
	const db = client.db('TodoApp');

	db.collection('Todos').find().toArray().then((docs) => {
		console.log('Todos'),
		console.log(JSON.stringify(docs, undefined, 2));
	}).catch(err => console.log(err));

	// client.close();
});