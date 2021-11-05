const { ObjectId } = require('mongodb');
const { getConnection } = require('./connection');

const insertTask = async ({ createDate, title, description, priority, status }) => {
  const db = await getConnection();
  const inserted = await db.collection('tasks').insertOne({ createDate, title, description, priority, status });
  return { _id: inserted.insertedId, createDate, title, description, priority, status };
};

const getAllTasks = async () => {
  const db = await getConnection();
  const tasks = await db.collection('tasks').find().toArray();
  return tasks;
};

const findTaskById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await getConnection();
  const taskId = await db.collection('tasks').findOne(new ObjectId(id));
  return taskId;
};

const updateTask = async ({ id, createDate, title, description, priority, status }) => {
  const db = await getConnection();
  const updated = await db.collection('tasks').findOneAndUpdate(
    { _id: new ObjectId(id) },
    [{ $set: { createDate, title, description, priority, status } }],
    { returnOriginal: false },
  );

  return updated.value;
};

const deleteTask = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await getConnection();
  const deleteOne = await db.collection('tasks').findOneAndDelete({ _id: new ObjectId(id) });
  return deleteOne.value;
};

module.exports = {
  insertTask,
  getAllTasks,
  findTaskById,
  updateTask,
  deleteTask,
}
