'use strict';
const http = require('http');
const PORT = 8000;
let fun, answer;
const server = http.createServer(function(req, res) {
	res.statusCode = 200;
	fun = req.url.split('/');
	switch(true) {
		case /\/math\/add\/\d+/.test(req.url) : 
		answer = (parseFloat(fun[3]) + parseFloat(fun[4])).toString();
		break;
		case /\/math\/subtract\/\d+/.test(req.url) : 
		answer = (parseFloat(fun[3]) - parseFloat(fun[4])).toString();
		break;
		case /\/math\/multiply\/\d+/.test(req.url) : 
		answer = (parseFloat(fun[3]) * parseFloat(fun[4])).toString();
		break;
		case /\/math\/divide\/\d+/.test(req.url) : 
		answer = (parseFloat(fun[3]) / parseFloat(fun[4])).toString();
		break;
		default :
		res.end("What? Don't you want to do some math?");
	}
		res.end(answer);
});

server.listen(PORT, function(){
	console.log('server now listening on port ' + PORT + ' ! ;)')
});
