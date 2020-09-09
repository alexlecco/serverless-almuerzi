const express = require('express')

const router = app.Rounter()

router.get('/', (req, res) => {
  res.send('get orders')
})

router.post('/', (req, res) => {
  res.send('post orders')
})

module.exports = router