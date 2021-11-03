const { MongoClient } = require('mongodb');

const OPTIONS = {
  urlNewParser: true,
  useUniFieldTopology: true,
};

// const MONGO_DB_URL = 'mongodb://localhost:27017/ToDoList';
// const DB_NAME = 'ToDoList';

const MONGO_DB_URL = 'mongodb://mongodb:27017/ToDoList';
const DB_NAME = 'ToDoList';

let schema = null;

async function getConnection() {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => conn.db(DB_NAME))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
    });
}

  module.exports = {
    getConnection,
  };
