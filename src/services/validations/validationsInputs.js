const { idReq, nameJoi, quantityJoi } = require('./schema');

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

const validateQuantity = (quantity) => {
  const { error } = quantityJoi.validate(quantity);
  if (error) {
    return {
      type: 'INVALID_QUANTITY', message: '"quantity" must be greater than or equal to 1',
    };
  }
  return { type: null, message: 'ok' };
};

module.exports = {
  validateIdReq,
  validateNameReq,
  validateQuantity,
};