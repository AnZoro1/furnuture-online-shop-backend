require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(express.json())
app.use('/upload', express.static('upload'))
app.use(cors())
app.use(morgan('dev'))

app.use(require('./routes/users.route'))

app.use(require('./routes/products.route'))

const { PORT, MONGO_SERVER } = process.env

const connectAndStartServer = async () => {
  try {
    await mongoose.connect(MONGO_SERVER)
    app.listen(PORT, () => {
      console.log(`Сервер запущен успешно: ${PORT}`)
      console.log('Успешно соединились с сервером MongoDB')
    })
  } catch (error) {
    console.log(`Ошибка при соединении: ${error.toString()}`)
  }
}

connectAndStartServer()
