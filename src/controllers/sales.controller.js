const { salesService } = require('../services');
const { mapError } = require('../../mapError');

const insertSales = async (req, res) => {
  const { body } = req;
  const response = await salesService.insert(body);
  if (response.type) return res.status(mapError(response.type)).json({ message: response.message });
  res.status(201).json({ ...response });
};

const getSales = async (_req, res) => {
  const response = await salesService.findAll();
  res.status(200).json(response);
};

const getByIdSales = async (req, res) => {
  const { id } = req.params;
  const response = await salesService.findById(id);
  if (response.message) return res.status(404).json(response);
  return res.status(200).json(response);
};

module.exports = {
  insertSales,
  getSales,
  getByIdSales,
};
