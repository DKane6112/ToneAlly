const express = require('express');
const progController = require('../controllers/progController');

const router = express.Router();

router.post('/', progController.getProg);

module.exports = router;