const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log(err);
	}
	console.log('Connected to MongDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to insert: ', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// })

	//INSERT NEW DOC INTO USERS OLLECTION (NAME AGA LOCATION)

	// db.collection('User').insertOne({
	// 	name: 'Andrew',
	// 	age: 24,
	// 	location: 'Philadelphia'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to insert',err)
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
	// });

	client.close();
});