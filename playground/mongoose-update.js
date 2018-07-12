const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b4412d74e39358fc210c699';

if (!ObjectID.isValid(id)) {
	console.log('id not valid');
}


