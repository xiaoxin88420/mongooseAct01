const router = require('express').Router()
const {User} = require('../models')

//GET
router.get('/users', (req, res) => {
  User.find()
    .populate('posts')
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

//POST
router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

//PUT
router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE
router.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router