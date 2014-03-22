var express = require('express');
var app = express();
var Note = require('./models/Note');
var mongoose = require('mongoose');

mongoose.connect('localhost/note');
mongoose.connection.on('error', function(err) {
	console.log('mongoose connection failed:', err);
})

app.use(function(err, req, res, next) {
	if (err.errors) {
		res.send(400, err);
	}
});

app.use(express.errorHandler());
app.use(express.json());

app.get('/note', function(req, res, next) {
	Note.find({}, function(err,notes) {
		if (err) return next(err);
		res.send(notes);
	})
});

app.post('/note', function(req, res, next) {
	var note = new Note({
		item: req.body.item,
		amount: req.body.amount
	});

	note.save(function(err, note) {
		if (err) return next(err);
		res.send(note);
	})
});

app.put('/note/:id', function(req, res, next) {
	var note = {
		item: req.body.item,
		amount: req.body.amount
	};

	Note.findByIdAndUpdate(req.params.id, note, function(err, note) {
		if (err) return next(err);
		res.send(note);
	});
})

app.delete('/note/:id', function(req, res, next) {
	Note.findByIdAndRemove(req.params.id, function(err) {
		if (err) return next(err);
		res.send(200);
	});
})

app.listen(3000);

exports.app = app;