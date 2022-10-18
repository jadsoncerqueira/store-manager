const validateInputs = (req, res, next) => {
  if ('name' in req.body) {
    next();
  } else {
    res.status(400).json({ message: '"name" is required' });
  }
};

module.exports = {
  validateInputs,
};