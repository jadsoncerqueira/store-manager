const { validateIdReq } = require('./validations/validationsInputs');
const { productsModel } = require('../models');

const findAll = async () => {
  const response = await productsModel.findAll();
  return { type: null, message: response };
};

const findById = async (id) => {
  const error = validateIdReq(id);
  if (error.type) return error;

  const response = await productsModel.findById(id);
  if (response.length !== 0) return { type: null, message: response };
  return { type: 'PRODUCTS_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};