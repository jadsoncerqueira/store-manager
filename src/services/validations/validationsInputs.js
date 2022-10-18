const { idReq, nameJoi } = require('./schema');

const validateIdReq = (id) => {
  const { error } = idReq.validate(id);
  if (error) return { type: 'INPUT_VALUE', message: '"id" inválido' };
  return { type: null, message: 'ok' };
};

const validateNameReq = (nome) => {
  const { error } = nameJoi.validate(nome);
  if (error) {
    return { type: 'INPUT_VALUE', message: '"name" length must be at least 5 characters long' };
  }
  return { type: null, message: 'ok' };
};

module.exports = {
  validateIdReq,
  validateNameReq,
};