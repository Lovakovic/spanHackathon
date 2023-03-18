const express = require('express');
const assessmentController = require('../controllers/assessment.controller');
const router = express.Router();

router.get('/:url', assessmentController.assessUrl);

module.exports = router;
