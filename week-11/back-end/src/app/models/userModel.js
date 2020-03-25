import mongoose from 'mongoose'
import userSchema from '../schemas/usersSchema'

export default mongoose.model('Users', userSchema)
