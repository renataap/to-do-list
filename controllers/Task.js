const taskService = require('../services/Task');

const OK_STATUS = 200;
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

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(OK_STATUS).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(INTERNAL_SERVER_ERROR).json({ message: 'Aconteceu erro ao buscar os dados' });
  }
};

const findTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await taskService.findTaskById(id);
  if (task.err) return res.status(UNPROCESSABLE_ENTITY_STATUS).json(task);

  res.status(OK_STATUS).json(task);
};

module.exports = {
  insertTask,
  getAllTasks,
  findTaskById,
};
