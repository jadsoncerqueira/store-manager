const { productsService } = require('../services');
const { mapError } = require('../../mapError');

const getProducts = async (_req, res) => {
  const response = await productsService.findAll();
  res.status(200).json(response.message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const productsAll = await productsService.findById(Number(id));

  if (productsAll.type) {
    return res.status(mapError(productsAll.type)).json({ message: productsAll.message });
  }

  return res.status(200).json(productsAll.message[0]);
};

const insertProducts = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const response = await productsService.insert(name);

  if (response.type) return res.status(422).json({ message: response.message });
  res.status(201).json({ id: response.message.insertId, name });
};

module.exports = {
  getProducts,
  getProductsById,
  insertProducts,
};

// novo