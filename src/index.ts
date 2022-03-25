import express, { Application } from 'express'
import path from 'path'
import fileUpload from 'express-fileupload'
import router from './routes'
import errorHandler from './middleware/ErrorHandlingMiddleware'
const app:Application = express()
const PORT = process.env.PORT || 5000


app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler.errorHandling)

async function start() {
  try {
    app.listen(PORT)
    console.log(PORT)
  } catch (e) {
    console.log(e)
  }
}

start()
