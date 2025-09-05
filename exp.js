const express = require('express');
const exp = express();
const PORT = 9000;

// Creating a simple data source
const users = {
  20: 'Welcome X',
  21: 'Welcome Y',
  22: 'Welcome Z',
};

/* exp.get('/', function (req, res) {
  //   console.log('Hello World');
  res.send('Hello World');
});

exp.get('/welcome', function (req, res) {
  res.send('Welcome back guys');
}); */

//how to accept a dynamic URL
// Defining a dynamic route using a route parameter ':id'
//exp.get('/welcome/:id', function (req, res) {
exp.get('/welcome', function (req, res) {
  //getting id from the route(URL) paramters
  //   const id = req.params.id; //for using route params
  const id = req.query.id; //for query params
  //checking if the id exists in the data source
  if (users[id]) {
    //if it exists
    res.send(users[id] + ' id:' + id);
  } else {
    //if it does not exists in the data source.
    res.status(404).send('Error: ID not found. Please provide a proper ID');
  }
});

exp.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
