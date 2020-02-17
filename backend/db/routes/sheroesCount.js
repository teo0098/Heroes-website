const express = require('express');
require('../dbconnection');
const Hero = require('../models/hero');
const router = express.Router();

router.get('/sheroesCount', async (req, res) => {
    try {
        const heroesCount = await Hero.countDocuments({});
        res.status(200).send({ count: heroesCount });
    } catch(error) {
        res.status(404).send({ error });
    }
});

module.exports = router;