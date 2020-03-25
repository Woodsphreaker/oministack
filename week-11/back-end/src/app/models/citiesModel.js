import mongoose from 'mongoose'
import citiesSchema from '../schemas/citiesSchema'

export default mongoose.model('Cities', citiesSchema)
