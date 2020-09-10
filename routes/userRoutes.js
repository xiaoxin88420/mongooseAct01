const router = require('express').Router()
const {User} = require('../models')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
  const {name, email, username, password } = req.body
  User.register(new User({ name, email, username }), password, err => {
    if (err) { console.log(err)}
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  const { username, password } = req.body
  User.authenticate()(username, password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})


//GET
// router.get('/users', (req, res) => {
//   User.find()
//     .populate('posts')
//     .then(users => res.json(users))
//     .catch(err => console.log(err))
// })

//POST
// router.post('/users', (req, res) => {
//   User.create(req.body)
//     .then(user => res.json(user))
//     .catch(err => console.log(err))
// })

//PUT
// router.put('/users/:id', (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body)
//     .then(user => res.sendStatus(200))
//     .catch(err => console.log(err))
// })

//DELETE
// router.delete('/users/:id', (req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(user => res.sendStatus(200))
//     .catch(err => console.log(err))
// })

module.exports = router