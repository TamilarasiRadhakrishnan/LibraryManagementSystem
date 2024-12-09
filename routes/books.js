const express = require('express');
const { listBooks } = require('../controllers/books');

const router = express.Router();

router.get('/', listBooks); // List all books

module.exports = router;
