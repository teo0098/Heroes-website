const express = require('express');
require('../dbconnection');
const User = require('../models/user');
const router = express.Router();

router.post('/users', (req, res) => {
    res.send({user: req.body});
});

module.exports = router;