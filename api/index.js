const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// setup app
const app = express()
app.use(bodyParser.json())
app.use(cors())

// connect db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// endpoint
app.get('*', (req, res) => {
  res.send('successfuly GET method')
})

module.exports = app