const express = require('express');
const demoController = require('../controllers/demo.controller');
const router = express.Router();
router.post('/welcome', demoController.welcome);
module.exports = router;
