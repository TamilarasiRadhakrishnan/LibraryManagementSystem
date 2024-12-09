const express = require('express');
const { registerUser, loginUser, getBorrowHistory } = require('../controllers/users');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/', registerUser); // Register
router.post('/login', loginUser); // Login
router.get('/:id/history', authenticate, getBorrowHistory); // Borrow history

module.exports = router;
