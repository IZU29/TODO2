const express = require('express')
const app = express()
const toDoroute = require('./routes/todo')

app.use('/api' , toDoroute)

app.listen(5000 , () => {
    console.log('Server is Listening on port 5000')
})