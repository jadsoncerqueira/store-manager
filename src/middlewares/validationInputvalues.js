const validateInputs = (req, res, next) => {
  if ('name' in req.body) {
    next();
  } else {
    res.status(400).json({ message: '"name" is required' });
  }
};

const validateInputsSales = (req, res, next) => {
  const salesList = req.body;
  const validationAll = salesList.every((el) => 'productId' in el && 'quantity' in el);
  const validationPro = salesList.every((el) => 'productId' in el);
  const validationQuantity = salesList.every((el) => 'quantity' in el);

  if (validationAll) {
    next();
  } if (!validationPro) {
    res.status(400).json({ message: '"productId" is required' });
  } if (!validationQuantity) {
    res.status(400).json({ message: '"quantity" is required' });
  }
};

module.exports = {
  validateInputs,
  validateInputsSales,
};