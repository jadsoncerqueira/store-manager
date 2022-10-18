const { salesService } = require('../services');
const { mapError } = require('../../mapError');

const insertSales = async (req, res) => {
  const { body } = req;
  const response = await salesService.insert(body);
  if (response.type) return res.status(mapError(response.type)).json({ message: response.message });
  const rows = Object.keys(response);
  console.log(rows.length);
  res.status(201).json({ ...response });
};

module.exports = {
  insertSales,
};
