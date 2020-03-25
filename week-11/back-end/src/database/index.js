// Mongodb
import mongoose from 'mongoose'
import mongoConfig from '../config/mongodb'

// Knex
// import knex from 'knex'
// import knexConfig from '../../knexfile'

const mongoDB = () =>
  mongoose.connect(mongoConfig.mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })

// const knexDB = () => knex(knexConfig.development)

const connect = (databases = []) => {
  if (!databases.length) {
    return false
  }

  for (const db of databases) {
    db()
  }
}

export default connect([mongoDB])
