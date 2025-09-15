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
app.set('view engine', 'ejs')

/**
 * 
 */
app.get('/', (req,res)=>{
    console.log('Here')
    // res.send('Hi')
    // res.sendStatus(500)
    // res.status(500).send('<user defined message>')
    
    /**
     * default status code is 200, so we do not need to include it.
     */
    //res.status(200).json({message:"Successful"})
    // res.json({message:"Successful"})

    /**
     * If you have to give user the permission to download.
     * you can use
     */
    // res.download("README.md")

    /**
     * To pass information from server to views, we have to add second parameter to render function
     * @param index is a view
     * @param object
     */
res.render('index', {text:'world'})
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

const welcomeRouter = require('./routes/welcome')
app.use('/welcome', welcomeRouter)
/**
 * our server is listening on given port-number
 */
app.listen(PORT)