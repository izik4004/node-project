require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')

const workoutsRoutes = require('./routes/workouts')

//express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutsRoutes)

//connnect to DB 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
        console.log('listening',)
    })
})
.catch((error) => {
    console.log(error)
})




