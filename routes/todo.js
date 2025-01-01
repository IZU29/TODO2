const {createNewTask , EditTask , DeleteTask , getallTask} = require('../controllers/todo')
const express = require('express')
const router = express.Router()

router.route('/').post(createNewTask).get(getallTask)

module.exports = router


