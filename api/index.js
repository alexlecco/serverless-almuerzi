const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// import endpoint routes
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')

// setup app
const app = express()
app.use(bodyParser.json())
app.use(cors())

// connect db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// use endpoints
app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)

// export app to be used
module.exports = app