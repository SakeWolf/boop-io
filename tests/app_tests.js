var request = require('supertest');
var app = require('./../app/index.js');

describe('Requests to the root path', function() {
	it('Returns a 200 status code', function(done) {
		request(app)
			.get('/')
			.expect(200, done);
	});
	it('Returns an index html file', function(done) {
		request(app)
			.get('/')
			.expect('Content-Type', /html/, done);
	});
});