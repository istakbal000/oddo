const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { authMiddleware } = require('../controllers/userController');

// Leave feedback (POST)
router.post('/', authMiddleware, feedbackController.leaveFeedback);
// Get feedback for a user (GET)
router.get('/:id', feedbackController.getFeedback);

module.exports = router;
