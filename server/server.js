var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// var newTodo = new Todo({
// 	text: 'Brush your teeth'
// });

// newTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
// 	console.log(`There was an error: ${err}`);
// });

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

var newUser = new User({
	email: 'john@john.com'
});

newUser.save().then((doc) => {
	console.log(JSON.stringify(doc), undefined, 2);
}, (err) => console.log(`Couldn't create a new user: ${err}`));








