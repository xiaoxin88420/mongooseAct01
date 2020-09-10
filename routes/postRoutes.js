const router = require('express').Router()
const { Post, User } = require('../models')

//GET
router.get('/posts', (req, res) => {
  Post.find()
    .populate('user')
    .then(users => res.json(posts))
    .catch(err => console.log(err))
})

//POST
router.post('/posts', (req, res) => {
  Post.create(req.body)
    .then(post =>
      User.findByIdAndUpdate(post.user, { $push: { posts: posts._id } })
        .then(() => res.json(post))
        .catch(err => console.log(err))
    )
    .catch(err => console.log(err))
})

//PUT
router.put('/posts/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE
router.delete('/posts/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router