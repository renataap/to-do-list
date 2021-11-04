const taskService = require('../services/Task');

const CREATED_STATUS = 201;
const UNPROCESSABLE_ENTITY_STATUS = 422;
const INTERNAL_SERVER_ERROR = 500;

const insertTask = async (req, res) => {
  try {
    const { createDate, title, description, priority, status } = req.body;
    const newTask = await taskService.insertTask({ createDate, title, description, priority, status });
    if (newTask.err) return res.status(UNPROCESSABLE_ENTITY_STATUS).json(newTask);

    res.status(CREATED_STATUS).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(INTERNAL_SERVER_ERROR).json({ message: 'Aconteceu um erro ao cadastrar a tarefa' });
  }
};

module.exports = {
  insertTask,
};
