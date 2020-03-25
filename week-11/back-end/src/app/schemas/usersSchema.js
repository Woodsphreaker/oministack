import mongoose from 'mongoose'

const Users = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
})

export default Users
