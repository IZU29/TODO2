const Task = require('../models/todo')
const getallTask = async (req,res) => {
    try{
    const Todo = await Task.find({})
    res.status(200).json(Todo)
    }
    catch(error){
        console.log(error)
    }
}
const createNewTask = async (req,res) => {
    try{
    const {task , completed} = req.body
    const TaskInfo = {task : task , completed :completed}
    const Todo = await Task.create(TaskInfo)
    console.log(req.body)
    res.status(200).json(Todo)
    // res.json('Create New Task')
    }
    catch(error){
        console.log(error)
    }
}
const EditTask = (req,res) => {
    res.json('Create New Task')
}
const DeleteTask = (req,res) => {
    res.json('Create New Task')
}


module.exports = {
    getallTask,
    createNewTask,
    EditTask,
    DeleteTask
}