const express = require('express')
const router = express.Router()

// Index route
router.get('/', (req, res) => {
  res.render('index')
})

// About route
router.get('/about', (req, res) => {
  res.render('about')
})

// Users route
router.get('/users', (req, res) => {
  res.render('users')
})

module.exports = router
