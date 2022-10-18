const express = require('express');
const { productsController } = require('../controllers');
const { valInput } = require('../middlewares');

const router = express.Router();

router.post('/', valInput.validateInputs, productsController.insertProducts);
router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductsById);

module.exports = router;