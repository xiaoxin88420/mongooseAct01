
const router = require('express').Router()
const { join } = require('path')

router.get('/blog', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'blog.html'))
})

router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

module.exports = router