var http = require('http');
var PORT = 8000;

var server = http.createServer(function(req, res) {
		switch(true) {
			case /\/math\/add/.test(req.url) :
			res.statusCode = 200;
			var add = req.url.split('/');
			var answer = (parseFloat(add[3]) + parseFloat(add[4])).toString();
			res.write(answer);
			res.end();
			break;
			case /\/math\/subtract/.test(req.url) :
			res.statusCode = 200;
			var subtract = req.url.split('/');
			var answer = (parseFloat(add[3]) - parseFloat(add[4])).toString();
			res.write(answer);
			res.end();
			break;
			case /\/math\/multiply/.test(req.url) :
			res.statusCode = 200;
			var multiply = req.url.split('/');
			var answer = (parseFloat(add[3]) * parseFloat(add[4])).toString();
			res.write(answer);
			res.end();
			break;
			case /\/math\/divide/.test(req.url) :
			res.statusCode = 200;
			var divide = req.url.split('/');
			var answer = (parseFloat(add[3]) / parseFloat(add[4])).toString();
			res.write(answer);
			res.end();
			break;
		default :
			res.end("Pick a function, any function.")
		}
		res.end("What? Don't you want to do some math?");
});

server.listen(PORT, function(){
	console.log('server now listening on port ' + PORT + ' ! ;)')
});
