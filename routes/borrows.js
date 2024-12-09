const express = require('express');
const { createBorrowRequest, manageBorrowRequest } = require('../controllers/borrows');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/', authenticate, createBorrowRequest); // Create borrow request
router.put('/:id/:action', authenticate, manageBorrowRequest); // Approve/Deny request

module.exports = router;
