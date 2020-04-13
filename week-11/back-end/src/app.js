import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { errors } from 'celebrate'

import routes from './routes'
import './database/index'

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(routes)
app.use(errors())

export default app
