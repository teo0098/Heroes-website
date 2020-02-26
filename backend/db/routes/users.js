const express = require('express');
require('../dbconnection');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/users', async (req, res) => {
    try {
        if (/^[A-Z0-9a-z]{5,15}$/.test(req.body.username) === false || /^[A-Z0-9a-z!@#.$]{6,20}$/.test(req.body.password) === false) throw new Error();
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

router.post('/users/login', async (req, res) => {
    try {
        const userExists = await User.findOne({ username: req.body.username });
        if (!userExists) return res.send({ user: 'NOT EXISTS' });
        const comparePass = await bcrypt.compare(req.body.password, userExists.password);
        if (!comparePass) return res.send({ user: 'NOT EXISTS' });
        const token = jwt.sign({ username: userExists.username }, process.env.JWT_SECRET_KEY);
        res.status(200).send({ user: 'LOGGED', username: userExists.username, token });
    } catch(error) {
        res.status(404).send({ user: 'ERROR' });
    }
});

module.exports = router;