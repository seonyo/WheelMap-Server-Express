const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.post('/signup', async (req, res) => {
    try {
        const { password, nickname, profile, email } = req.body;
        const newUser = await User.create({ password, nickname, profile, email });
        res.json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
