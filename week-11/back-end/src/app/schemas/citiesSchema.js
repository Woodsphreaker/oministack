import mongoose from 'mongoose'

const Cities = new mongoose.Schema({
  id: Number,
  name: String,
})

export default Cities
