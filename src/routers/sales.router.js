const express = require('express');
const { salesController } = require('../controllers');
const { valInput } = require('../middlewares');

const router = express.Router();

router.post('/', valInput.validateInputsSales, salesController.insertSales);

module.exports = router;