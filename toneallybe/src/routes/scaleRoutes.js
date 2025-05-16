const express = require('express');
const scaleController = require('../controllers/scaleController');

const router = express.Router();

router.post('/', scaleController.getScale);

module.exports = router;