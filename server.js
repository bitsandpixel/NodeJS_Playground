/**
 * @summary Built-in function to import modules using a string argument using their package name
 * @param "name of the package"
 * @summary express variable now holds the express function
 */
const express = require('express')

/**
 * @summary This call returns an Express application instance
 */
const app = express()
const PORT = 3000;

/**
 * 
 */
app.get('/', (req,res)=>{
    console.log('Here')
    // res.send('Hi')
    res.sendStatus(500)
    // res.sendStatus(500)
})

app.get('/welcome', (req,res)=>{
    console.log("Entered /welcome folder")
    res.sendStatus(200)
})

/**
 * our server is listening on given port-number
 */
app.listen(PORT)