const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const borrowRoutes = require('./routes/borrows');

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrow-requests', borrowRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
