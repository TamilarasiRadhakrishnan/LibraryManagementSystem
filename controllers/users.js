const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

exports.registerUser = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO Users (email, password, role) VALUES (?, ?, ?)';
        db.query(sql, [email, hashedPassword, role], (err, result) => {
            if (err) return res.status(400).send(err);
            res.status(201).send("User registered successfully.");
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM Users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) return res.status(401).send("Invalid credentials.");
        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).send("Invalid credentials.");
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ token });
    });
};

exports.getBorrowHistory = (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM BorrowHistory WHERE user_id = ?';
    db.query(sql, [userId], (err, results) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(results);
    });
};
