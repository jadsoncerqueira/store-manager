const conn = require('./conection');

const insert = async (arr) => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );

  await Promise.all(
    arr.map(async (element) => {
      await conn.execute(
        'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
        [insertId, element.productId, element.quantity],
      );
    }),
  );
  return insertId;
};

module.exports = {
  insert,
};