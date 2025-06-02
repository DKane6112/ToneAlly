const express = require('express');
const scaleController = require('../controllers/scaleController');

const router = express.Router();

router.post('/', scaleController.getScale);
router.post('/interval/easy', scaleController.getInterval);
router.post('/interval/medium', scaleController.getInterval);
router.post('/interval/hard', scaleController.getInterval);

module.exports = router;