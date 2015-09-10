'use strict';
const http = require('http');
const wordData = require('./wordCounter.js');
const mdn5 = require('md5');
const math = require('./math.js');
const PORT = 8000;
let express = require('express');
let app = express();

let fun, answer;

app.get('/math/*', (req,res,next) => {
	math(req, res, next);
});
app.get('/words/*', (req,res,next) => {
	res.end(wordData(req, res, next, fun));
});
// app.get('/gravatarUrl/*', (req,res,next) => {

// });


const server = http.createServer(function(req, res) {
	res.statusCode = 200;
	fun = req.url.split('/');
	// if ( /\/math/.test(req.url)) {
	// 		math(req, res);
	// }
	// if (/\/words/.test(req.url)) {
	// 	res.end(wordData(fun));
	// }
	if (/\/gravatarUrl/.test(req.url)){
		let gravatar = "http://gravatar.com/avatar/" + (mdn5(fun[2])).toString();
		let html = "<img src='"+gravatar+"'></img>"
		res.setHeader("Content-Type", "text/html");
		res.end(html);
	}
});

app.listen(PORT, function(){
	console.log('server now listening on port ' + PORT + ' ! ;)')
});
