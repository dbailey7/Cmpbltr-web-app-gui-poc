/*
 * Server related tasks for the API
 */

// Dependencies
var http = require('http');
var https = require('https');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var fs = require('fs');
var config = require('./config');
var handlers = require('./handlers');
var helpers = require('./helpers');
var path = require('path');
var util = require('util');
var debug = util.debuglog('server');

// Instantiate a server module object, i.e. container for exporting
var server = {};

// Instantiate the HTTP server
server.httpServer = http.createServer(function(req, res){
	server.unifiedServer(req, res);
});

// Instantiate the HTTPS server
server.httpsServerOptions = {
	'key' : fs.readFileSync(path.join(__dirname, '/../https/key.pem')),
	'cert' : fs.readFileSync(path.join(__dirname, '/../https/cert.pem'))
};
server.httpsServer = https.createServer(server.httpsServerOptions, function(req, res){
	server.unifiedServer(req, res);
});

// All of the server logic for both the http and https servers
server.unifiedServer = function(req, res){

	// Get the URL and parse it
	var parsedUrl = url.parse(req.url, true);

	// Get the path
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/+|\/+$/g, '');

	// Get the query string as an object
	var queryStringObject = parsedUrl.query;

	// Get the HTTP method
	var method = req.method.toLowerCase();

	// Get the headers as an object
	var headers = req.headers;

	// Get the payload, if any
	var decoder = new StringDecoder('utf-8');
	var buffer = '';
	req.on('data', function(data){
		buffer += decoder.write(data);
	});
	req.on('end', function(){
		buffer += decoder.end();

		// Choose the handler for this response to fire; if one is not selected
		// use the notFound handler
		var chosenHandler = typeof(server.router[trimmedPath]) !== 'undefined' ?
			server.router[trimmedPath] : handlers.notFound;

		// If the request is within the public directory, use the public handler instead
		chosenHandler = trimmedPath.indexOf('public/') > -1 ?
			handlers.public : chosenHandler;

		// Construct the data object to send to the handler
		var data = {
			'trimmedPath' : trimmedPath,
			'queryStringObject' : queryStringObject,
			'method' : method,
			'headers' : headers,
			'payload' : helpers.parseJsonToObject(buffer)
		};

		// Route the request to the handler specified in the router
		chosenHandler(data, function(statusCode, payload, contentType){

			// Determine the type of response, default to JSON
			contentType = typeof(contentType) =='string' ? contentType : 'json';

			// Use the status code called back by the handler, or default to 200
			statusCode = typeof(statusCode) =='number' ? statusCode : 200

			//Return the response-parts that are content-specific
			var payloadString = '';
			if(contentType == 'json'){
				res.setHeader('Content-Type', 'application/json');
				payload = typeof(payload) == 'object' ? payload : {};
				payloadString = JSON.stringify(payload);
			}
			if(contentType == 'html'){
				res.setHeader('Content-Type', 'text/html');
				payloadString = typeof(payload) == 'string' ? payload : '';
			}
			if(contentType == 'favicon'){
				res.setHeader('Content-Type', 'image/x-icon');
				payloadString = typeof(payload) !== 'undefined' ? payload : '';
			}
			if(contentType == 'css'){
				res.setHeader('Content-Type', 'text/css');
				payloadString = typeof(payload) !== 'undefined' ? payload : '';
			}
			if(contentType == 'png'){
				res.setHeader('Content-Type', 'image/png');
				payloadString = typeof(payload) !== 'undefined' ? payload : '';
			}
			if(contentType == 'jpg'){
				res.setHeader('Content-Type', 'image/jpeg');
				payloadString = typeof(payload) !== 'undefined' ? payload : '';
			}
			if(contentType == 'plain'){
				res.setHeader('Content-Type', 'text/plain');
				payloadString = typeof(payload) !== 'undefined' ? payload : '';
			}

			// Return the response-parts that are common to all content-types
			res.writeHead(statusCode);
			res.end(payloadString);

			// If the response is 200, print green, otherwise print red
			if(statusCode == 200){
				debug('\x1b[32m%s\x1b[0m', 'Returning this response: "' +
					statusCode, payloadString + '"');
			} else {
				debug('\x1b[31m%s\x1b[0m', 'Returning this response: "' +
					statusCode, payloadString + '"');
			}
		});
	});
};

// init function, created here because ... refactoring
server.init = function(){

  // Start the HTTP server
  server.httpServer.listen(config.httpPort, function(){
  	console.log('\x1b[36m%s\x1b[0m', "The HTTP server is now listening on port " + config.httpPort +
  		" ...");
  });

  // Start the HTTPS server
  server.httpsServer.listen(config.httpsPort, function(){
  	console.log('\x1b[35m%s\x1b[0m', "The HTTPS server is now listening on port " + config.httpsPort +
  		" ...");
  });
};


// Define a request router object to match up the services to their handlers
server.router = {
	'': handlers.index,  // If no specific request is specified, then index will be served
	'account/create': handlers.accountCreate,
	'account/edit': handlers.accountEdit,
	'account/deleted': handlers.accountDeleted,
	'session/create': handlers.sessionCreate,
	'session/deleted': handlers.sessionDeleted,
	'rules/all': handlers.rulesList,
	'rules/create': handlers.rulesCreate,
	'rules/edit': handlers.rulesEdit,
	'ping': handlers.ping,
	'api/users': handlers.users,
	'api/tokens': handlers.tokens,
	'api/rules': handlers.rules,
	'favicon': handlers.favicon,
	'public': handlers.public
};


// Export the server
module.exports = server;
