const express = require('express');
const router = express.Router();
const { getLaptops, getLaptopsById } = require('../controllers/laptopController');

router.get('/laptops', getLaptops);
router.get('/laptops/:id', getLaptopsById);

module.exports = router;
