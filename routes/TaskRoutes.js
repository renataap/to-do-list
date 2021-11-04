const router = require('express').Router();
const taskController = require('../controllers/Task');

router.post('/tasks', taskController.insertTask);

module.exports = router;
