var mysql = require('mysql');
var http = require('http');
var express = require('express'); 

http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('<h1>Inchora</h1>\n Hello World\n');
}).listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

