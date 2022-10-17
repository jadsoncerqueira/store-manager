const conn = require('./conection');

const findAll = async () => {
  const [result] = await conn.execute('SELECT * FROM products ORDER BY id');
  return result;
};

const findById = async (id) => {
  const [result] = await conn.execute('SELECT * FROM products WHERE id = ?', [id]);
  return result;
};

module.exports = {
  findAll,
  findById,
};