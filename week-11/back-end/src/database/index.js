import mongoose from 'mongoose'
import mongoConfig from '../config/mongodb'

const mongo = () =>
  mongoose.connect(mongoConfig.mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })

const connect = (databases = []) => {
  if (!databases.length) {
    return false
  }

  for (const db of databases) {
    db()
  }
}

export default connect([mongo])
