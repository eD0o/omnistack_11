const express = require("express");
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//npm instala e gerencia pacotes, npx executa pacotes

// Rota/Recurso - o que vem na URL, por exemplo, /users

// Métodos HTTP:
// GET: Retorna informações
// POST: Criar/enviar informações
// PUT: Altera informações
// DELETE: Deleta informações

// Tipos de Parâmetros:

// Query Params: parametros nomeados e enviados na rota
// parâmetros na URL usando ?param="", page=2&
// Utilizados em filtros, paginação

//Route Params: parametros utilizados para identificar recursos
//usa-se com :, é pra casos mais específicos

//Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

/**
 * SQL - Relacionais
 * NoSQL - Não relacionais
 */

/**
 * Driver: Select * FROM users
 * Query Builder:table('users').select('*').where() -> exemplos em .js
 */


module.exports = app;
