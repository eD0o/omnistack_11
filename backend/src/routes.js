const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3),
    email:Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city:Joi.string().required(),
    uf:Joi.string().required().length(2),
  })
}), OngController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]:Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), profileController.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page:Joi.number(),
  })
}), IncidentController.index);



routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id',celebrate({
  [Segments.PARAMS]:Joi.object().keys({
    id:Joi.number().required(),
  })
}), IncidentController.delete);

module.exports = routes;