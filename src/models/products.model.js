const conn = require('./conection');

const findAll = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products ORDER BY id');
  return result;
};

const findById = async (id) => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return result;
};

const insert = async (productName) => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [productName],
  );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};
