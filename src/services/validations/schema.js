const Joi = require('joi');

const idReq = Joi.number().min(1);

const nameJoi = Joi.string().min(5).required();

module.exports = {
  idReq,
  nameJoi,
};