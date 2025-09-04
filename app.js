// var a = 7;
// var b = 8;
// var c = 1 + b;

// console.log('Hello World');
// console.log('The sum of two numbers is: ' + c);

/* 
createServer is a function available in HTTP
*/

/*
// loads and imports the built-in HTTP module.
This module provides functionalities for creating and managing HTTP servers and clients within a Node.js application
*/
var http = require('http');
http
  .createServer(function (req, res) {
    // res.write('Welcome Back GuyS!!!');
    // res.end();
    //for the last line you can simply write res.end instead of ending it in a seperate line.
    res.writeHead(200, { 'content-type': 'text/plain' }); //text/plain for plain text
    res.write('Hi Guys, \n');
    res.end('I am back NOW');
  })
  .listen(8080, function () {
    console.log('Server listening on port 8080');
  });

const httpa = require('http');

const server = httpa.createServer((req, res) => {
  //text/html for HTML so the client correctly interprets the newline characters or HTML tags
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>This is the first line.</h1>'); // Add a newline character
  res.write('<h2>This is the second line.</h2>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
