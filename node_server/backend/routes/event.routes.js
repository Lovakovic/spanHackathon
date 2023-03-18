const express = require('express');
const eventController = require('../controllers/event.controller');
const router = express.Router();

router.get('/all', eventController.getAllEvents);

module.exports = router;
