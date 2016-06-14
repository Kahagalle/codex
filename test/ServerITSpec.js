//var should = require('should');
//var request = require('request');
//var url = 'http://localhost:8080';
//var HttpServer = require('../app').HttpServer;
//var server;
//
//describe('HttpServer', function () {
//
//    before(function (done) {
//        server = new HttpServer({port: 8080}).start(done);
//    });
//
//    after(function (done) {
//        server.stop(done);
//    });
//
//    it('should get root ok', function (done) {
//        request(url, function (error, response, body) {
//            response.statusCode.should.eql(200);
//            body.should.eql({ data: 'Some data'});
//            done();
//        });
//    });
//});