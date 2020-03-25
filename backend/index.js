const express = require("express");

const app = express();

app.use(express.json);

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

app.post("/users", (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: "Semana Omnistack 11",
    aluno: "Eduardo Vinícius"
  });
});

app.listen(3333);
