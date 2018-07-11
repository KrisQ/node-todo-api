const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b4412d74e39358fc210c699';

if (!ObjectID.isValid(id)) {
	console.log('id not valid');
}


// Todo.find({
// 	_id: id
// }).then((todos) => console.log(todos));

// Todo.findOne({
// 	_id: id
// }).then((todos) => console.log(todos));

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log(todo);
// }).catch((err) => console.log(err));

//QUERY THE USER'S COLLECTION BY ID 

User.findById(id).then((user) => {
	if (!user) {
		return console.log('no user');
	}
	console.log(user);
}).catch(e => console.log(e));