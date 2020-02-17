const express = require('express');
require('../dbconnection');
const Hero = require('../models/hero');
const router = express.Router();

router.get('/sheroes', async (req, res) => {
    try {
        const heroes = await Hero.find({}).limit(5);
        res.status(200).send({ heroes });
    } catch(error) {
        res.status(404).send({ error: "ERROR" });
    }
});

router.get('/sheroes/:limit', async (req, res) => {
    try {
        const parsedLimit = parseInt(req.params.limit, 10);
        const heroes = await Hero.find({}).skip((parsedLimit * 5) - 5).limit(5);
        res.status(200).send({ heroes });
    } catch(error) {
        res.status(404).send({ error: "ERROR" });
    }
});

router.get('/sheroes/hero/:callname', async (req, res) => {
    try {
        const hero = await Hero.findOne({ callname: req.params.callname });
        res.status(200).send({ hero });
    } catch(error) {
        res.status(404).send({ error: "ERROR" });
    }
});

module.exports = router;