const express = require('express');
const assessmentController = require('../controllers/assessment.controller');
const router = express.Router();

router.get('/all', assessmentController.getAssessments);
router.get('/url/:url', assessmentController.getAssessment);

module.exports = router;
