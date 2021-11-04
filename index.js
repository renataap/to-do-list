const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/TaskRoutes');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.use(taskRoutes);

app.listen(PORT, () => console.log(`Servidor rodando aqui ${PORT}`));