var request = require('supertest');
var app = require('./../app/index.js');

describe('Requests to the root path', function() {
	it('Returns a 200 status code', function() {
		request(app)
			.get('/')
			.expect(200)
			.end(function(error) {
				if (error) throw error;
				done();
			});
	});

	it('Returns a boop', function() {
		request(app)
			.get('/')
			.expect('Boop!')
			.end(function(error) {
				if (error) throw error;
				done();
			})
	});
});