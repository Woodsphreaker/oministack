import express from 'express'
import http from 'http'
import routes from './routes'
import cors from 'cors'
import { creatSocketServer } from './lib/socket'

// databases
import './database'

const app = express()
const server = http.Server(app)
creatSocketServer(server)
app.use(cors())
app.use(express.json())
app.use(routes)

export default server
