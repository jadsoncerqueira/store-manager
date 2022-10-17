const Joi = require('joi');

const idReq = Joi.number().min(1);

module.exports = {
  idReq,
};