const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/me', userController.authMiddleware, userController.getProfile);
router.put('/me', userController.authMiddleware, userController.updateProfile);
router.get('/search', userController.searchBySkill);

module.exports = router;
