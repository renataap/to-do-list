const Task = require('../models/Task');

const code = 'invalid_data';

const errors = {
  isLengthLetterThan: 'O título precisa ter no mínimo 5 caracteres',
  isDuplicated: 'Já existe uma tarefa com o mesmo título',
};

const titleIsValid = (title) => typeof title === 'string' && title.length >= 5;

const validate = async ({ id, title }) => {
  if (!titleIsValid(title)) return { err: { code, message: errors.isLengthLetterThan } };

  // if (await Task.taskExists({ id, title })) {
  //   return { err: { code, message: errors.isDuplicated } };
  // }

  return {};
};

const insertTask = async ({ createDate, title, description, priority, status }) => {
  const validations = await validate({ createDate, title, description, priority, status });
  if (validations.err) return validations;

  const newTask = await Task.insertTask({ createDate, title, description, priority, status });
  return newTask;
};

const getAllTasks = async () => {
  const tasks = await Task.getAll();
  return tasks;
};

const findTaskById = async (id) => {
  const task = await Task.findTaskById(id);
  if (task === null) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    };
  }
  return task;
};

module.exports = {
  insertTask,
  getAllTasks,
  findTaskById,
};