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
/* const fs = require('fs');

console.log('Starting file read...');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('File read initiated, continuing with other tasks...'); */

/* var http = require('http');
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
 */

//Using an external module created calc.js
/* const calc = require('./calc.js');
const result = calc.add(4, 5);
const mulResult = calc.mul(4, 5);

console.log('the result is: ' + result);
console.log('Multiplication is: ' + mulResult); */
