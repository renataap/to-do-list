const router = require('express').Router();
const taskController = require('../controllers/Task');

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.findTaskById);
router.post('/tasks', taskController.insertTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
