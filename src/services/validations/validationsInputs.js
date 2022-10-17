const { idReq } = require('./schema');

const validateIdReq = (id) => {
  const { error } = idReq.validate(id);
  if (error) return { type: 'INPUT_VALUE', message: '"id" inválido' };
  return { type: null, message: 'ok' };
};

module.exports = {
  validateIdReq,
};