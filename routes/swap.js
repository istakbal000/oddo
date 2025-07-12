const express = require('express');
const router = express.Router();
const swapController = require('../controllers/swapController');
const { authMiddleware } = require('../controllers/userController');

router.post('/', authMiddleware, swapController.createSwap);
router.post('/:id/accept', authMiddleware, swapController.acceptSwap);
router.post('/:id/reject', authMiddleware, swapController.rejectSwap);
router.delete('/:id', authMiddleware, swapController.deleteSwap);
router.get('/', authMiddleware, swapController.listSwaps);

module.exports = router;
