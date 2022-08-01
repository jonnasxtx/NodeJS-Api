// GET:buscar uma informação backend
// POST: criar uma informação no backend
// PUT: alterar uma informação no backend
// DELETE: deletar

// tipos de parametros:
// Qquery params: parametros nomeados na rota após o simbolo de ?
// Route Params: Parametros utilizados para identificar um unico recurso
// request body: corpo da requisição, utilizado para criar ou alterar recursos

const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


