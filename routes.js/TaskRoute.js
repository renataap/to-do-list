const router = require('express').Router();
const taskController = require('../controllers.js/Task');

router.post('/tasks', taskController.insertTask);

module.exports = router;
