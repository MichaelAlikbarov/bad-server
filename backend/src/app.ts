import { errors } from 'celebrate'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import express, { json, urlencoded } from 'express'
import mongoose from 'mongoose'
import path from 'path'
import helmet from 'helmet'
import fs from 'fs'
import { DB_ADDRESS } from './config'
import errorHandler from './middlewares/error-handler'
import serveStatic from './middlewares/serverStatic'
import routes from './routes'
import { rateLimiter } from './middlewares/rateLimit'

const { PORT = 3000 } = process.env
const app = express()

app.use(cookieParser())

app.use(cors())
app.use(cors({ origin: process.env.ORIGIN_ALLOW || 'http://localhost:3000', credentials: true }));
// app.use(express.static(path.join(__dirname, 'public')));

const uploadPathTemp = path.join(__dirname, 'public', process.env.UPLOAD_PATH_TEMP || '')

if (!fs.existsSync(uploadPathTemp)) {
  fs.mkdirSync(uploadPathTemp, { recursive: true })
}

app.use(serveStatic(path.join(__dirname, 'public')))

app.use(urlencoded({ extended: true }))
app.use(json())

// app.options('*', cors())
app.set('trust proxy', true)
app.use(rateLimiter)
app.use(helmet())
app.use(routes)
app.use(errors())
app.use(errorHandler)

// eslint-disable-next-line no-console

const bootstrap = async () => {
    try {
        await mongoose.connect(DB_ADDRESS)
        await app.listen(PORT, () => console.log('ok'))
    } catch (error) {
        console.error(error)
    }
}

bootstrap()
