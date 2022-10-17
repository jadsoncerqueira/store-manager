const errorMap = {
  PRODUCTS_NOT_FOUND: 404,
  INVALID_ID: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};