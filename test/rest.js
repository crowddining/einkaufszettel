var expect = require('chai').expect;
var request = require('supertest');
var app = require('../app.js').app;

describe('note', function() {
	var newNote = {};

	before(function(done) {
		request(app)
			.post('/note')
			.send({
				item: 'Kartoffeln',
				amount: '10 Stk'
			})
			.expect(200)
			.end(function(err, res) {
				newNote = res.body;
				done();
			})
	});

	it('should return the content of the note', function(done) {
		request(app)
			.get('/note')
			.expect(200)
			.end(function(err, res) {
				expect(Array.isArray(res.body)).to.be.true;
				done();
			})
	})

	it('should insert a new note', function(done) {
		request(app)
			.post('/note')
			.send({
				item: 'Kartoffeln',
				amount: '10 Stk'
			})
			.expect(200)
			.end(function(err, res) {
				expect(!!res.body.item).to.be.true;
				expect(!!res.body.amount).to.be.true;
				expect(!!res.body._id).to.be.true;
				done();
			})
	})

	it('should update a note', function(done) {
		newNote.item = 'Trauben';
		request(app)
			.put('/note')
			.send(newNote)
			.expect(200)
			.end(function(err, res) {
				expect(res.body.item).to.equal('Trauben');
				done();
			})
	})

	it('should delete the note', function(done) {
		request(app)
			.del('/note/' + newNote._id)
			.expect(200,done);
	})
})