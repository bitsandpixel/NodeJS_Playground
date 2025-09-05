// var a = 7;
// var b = 8;
// var c = 1 + b;

// console.log('Hello World');
// console.log('The sum of two numbers is: ' + c);

/*
// loads and imports the built-in HTTP module.
This module provides functionalities for creating and managing HTTP servers and clients within a Node.js application
*/

/* var http = require('http');
http
  .createServer(function (req, res) { //createServer is a function available in HTTP
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

//Using an external module created calc.js
/* const calc = require('./calc.js');
const result = calc.add(4, 5);
const mulResult = calc.mul(4, 5);

console.log('the result is: ' + result);
console.log('Multiplication is: ' + mulResult); */

//using File System module to read a file

var fs = require('fs');
/*console.log('Started reading file');
fs.readFile('./calc.js', 'utf8', function (err, data) {
  if (err) {
    console.log('Error reading file: \n', err);
    return;
  }
  console.log('File content: \n', data);
}); */

//using File system module to write a file

/* fs.writeFile(
  'calx.js',
  'console.log("writing a new file")',
  'utf8',
  function (err) {
    console.log('new file has been created');
  }
); */

//using file system's appendFile function

/* fs.appendFile(
  'calc.js',
  '\n\nexports.isEven = function isEven(a){return a/2==0;}',
  'utf8',
  function (err) {
    console.log('isEven function is added calculator module');
  }
); */

/* const calc = require('./calc.js');
const result = calc.isEven(20);
console.log('is 20 an even number:' + result); */

//Using file system unlink function to delete a file - calx.js
fs.unlink('calx.js', function (err) {
  console.log('Deleted calx.js file');
});
