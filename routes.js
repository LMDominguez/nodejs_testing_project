const express = require('express')
const router = express.Router()

function authorize(level) {
  return (req, res, next) => {
    const user = {
      level: 5
    }
    if (user.level >= level) next()
      else res.send('Access denied')
  }
}

// Index route
router.get('/', authorize(3), (req, res) => {
  res.render('index')
})

// About route
router.get('/about', authorize(1), (req, res, next) => {
  res.render('about')
  console.log(1)
  next()
})

// Users route
router.get('/users', authorize(1), (req, res) => {
  res.render('users')
})

module.exports = router
