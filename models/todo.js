const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
    task:{
        type: 'String',
        required:[true , 'Must contain task name']
    },
    completed:{
        type: 'Boolean',
        required:[true , 'Must contain completed value']
    }
} , {timestamps : true})

module.exports = mongoose.model('Task' , todoSchema)