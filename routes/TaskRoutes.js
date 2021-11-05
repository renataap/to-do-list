const router = require('express').Router();
const taskController = require('../controllers/Task');

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.findTaskById);
router.post('/tasks', taskController.insertTask);


module.exports = router;
