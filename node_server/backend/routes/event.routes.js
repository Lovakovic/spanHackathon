const express = require('express');
const eventController = require('../controllers/event.controller');
const router = express.Router();

router.get('/all', eventController.getAllEvents);

// Not very REST-ful of me, I know, but React apparently doesn't natively include DELETE method
router.get('/delete/:id', eventController.deleteEvent);

module.exports = router;
