const express = require('express')
const welcomeRouter = express.Router()


welcomeRouter.get('/', (req,res)=>{
    console.log("Entered /welcome folder")
    res.json({ message: 'Welcome to the folder' })
})

welcomeRouter.get('/client', (req,res)=>{
    console.log("Entered /welcome/client folder")
    res.json({ message: 'Welcome to the Client folder' })
})

module.exports = welcomeRouter