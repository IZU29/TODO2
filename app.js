require('dotenv').config()
const express = require('express')
const app = express()
const toDoroute = require('./routes/todo')
const connectDB = require('./db/connect')

app.use(express.json())
app.use('/api' , toDoroute)

const start = () => {
    connectDB(process.env.MONGO_URI)
    app.listen(5000 , () => {
        console.log('Server is Listening on port 5000')
    })
}

start()