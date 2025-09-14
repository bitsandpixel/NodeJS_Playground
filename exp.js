const express = require('express');
const app = express();
const PORT = 9000;

/**
 * Creating a simple data source
 */
const ids = {
  20: 'Welcome X',
  21: 'Welcome Y',
  22: 'Welcome Z',
};

// Sample user data
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

// Route to get all users
app.get('/users', (req, res) => {
    res.json(users); // Sends the 'users' array as JSON
});

// Route to get a single user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user); // Sends the 'user' object as JSON
    } else {
        res.status(404).json({ message: 'User not found' }); // Sends an error message as JSON with a 404 status
    }
});


/* app.get('/', function (req, res) {
  //   console.log('Hello World');
  res.send('Hello World');
});

app.get('/welcome', function (req, res) {
  res.send('Welcome back guys');
}); */

//how to accept a dynamic URL
// Defining a dynamic route using a route parameter ':id'
//app.get('/welcome/:id', function (req, res) {
app.get('/welcome', function (req, res) {
  //getting id from the route(URL) paramters
  //   const id = req.params.id; //for using route params
  const id = req.query.id; //for query params
  //checking if the id exists in the data source
  if (ids[id]) {
    //if it exists
    res.send(ids[id] + ' id:' + id);
  } else {
    //if it does not exists in the data source.
    res.status(404).send('Error: ID not found. Please provide a proper ID');
  }
});

/**
 * 
 */
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
