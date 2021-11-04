const { getConnection } = require('./connection');

const insertTask = async ({ createDate, title, description, priority, status }) => {
  const db = await getConnection();
  const inserted = await db.collection('tasks').insertOne(
    {
      createDate,
      title,
      description,
      priority,
      status
    }
  );
  return { _id: inserted.insertedId, createDate, title, description, priority, status };
};

module.exports = {
  insertTask,
}
