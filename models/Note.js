var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
	item: String,
	amount: String
});

module.exports = mongoose.model('Note', noteSchema);