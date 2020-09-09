const express = require('express')

const router = app.Rounter()

router.get('/', (req, res) => {
  res.send('get meals')
})

router.post('/', (req, res) => {
  res.send('post meals')
})

module.exports = router