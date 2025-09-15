const express = require('express')
const userRouter = express.Router()



/**
 * This file contains all the routes for users.
 */
userRouter.get('/', (req,res)=>{
    console.log('/Users')
res.send('User List')
})

userRouter.get('/new', (req,res)=>{
    console.log('/Users/new')
res.send('User New Form')
})

/**
 * inorder to use this router, we have to export this router from this file. 
 */
module.exports = userRouter