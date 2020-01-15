import express from 'express'
import routes from './routes'

// databases
import './database'

const App = express()
App.use(express.json())
App.use(routes)

export default App
