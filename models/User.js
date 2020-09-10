const { model, Schema } = require('mongoose')

const User = new Schema ({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {timestamps: true})

module.exports = model('User', User)