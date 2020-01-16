import express from 'express'
import routes from './routes'
import cors from 'cors'

// databases
import './database'

const App = express()
App.use(cors())
App.use(express.json())
App.use(routes)

export default App
