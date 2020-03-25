import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import routes from './routes'
import './database/index'

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(routes)

export default app
