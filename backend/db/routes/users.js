const express = require('express');
require('../dbconnection');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/users', async (req, res) => {
    try {
        const userExists = await User.findOne({ username: req.body.username });
        if (userExists) return res.send({ user: 'EXISTS' });
        const user = new User(req.body);
        const hashedPass = await bcrypt.hash(user.password, 10);
        user.password = hashedPass;
        await user.save();
        res.status(201).send({ user: 'REGISTERED' });
    } catch(error) {
        res.status(404).send({ user: 'ERROR' });
    }
});

module.exports = router;