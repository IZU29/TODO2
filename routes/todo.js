const {createNewTask} = require('../controllers/todo')
const express = require('express')
const router = express.Router()

router.route('/').get(createNewTask)

module.exports = router


