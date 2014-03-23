var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
	item: {type: String, required: true},
	amount: {type: String, required: true}
});

module.exports = mongoose.model('Note', noteSchema);