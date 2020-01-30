import mongoose from 'mongoose'
import mongoConfig from '../config/mongoConfig'

const mongo = () => {
  mongoose.connect(mongoConfig.mongodb, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
}

const startdb = databases => {
  for (const db of databases) {
    db()
  }
}

export default startdb([mongo])
