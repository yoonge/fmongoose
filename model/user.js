import mongoose from './db.js'

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    default: 'male'
  },
  age: {
    type: Number,
    min: 1,
    max: 150
  },
  email: {
    type: String
  },
  status: {
    type: Number,
    default: 1,
    min: 0,
    max: 1
  }
})

const UserModel = mongoose.model('User', UserSchema, 'user')

export default UserModel
