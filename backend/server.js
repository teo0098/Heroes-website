const express = require('express');
require('./db/dbconnection');
const Hero = require('./db/models/hero');

const server = express();
const port = process.env.PORT || 5000;

server.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

server.get('/sheroes', async (req, res) => {
    try {
        const heroes = await Hero.find({}).limit(5);
        res.status(200).send({ heroes });
    } catch(error) {
        res.status(404).send({ error });
    }
});

server.get('/sheroes/:limit', async (req, res) => {
    try {
        const parsedLimit = parseInt(req.params.limit, 10);
        const heroes = await Hero.find({}).skip((parsedLimit * 5) - 5).limit(5);
        res.status(200).send({ heroes });
    } catch(error) {
        res.status(404).send({ error });
    }
});

server.get('/sheroesCount', async (req, res) => {
    try {
        const heroesCount = await Hero.countDocuments({});
        res.status(200).send({ count: heroesCount });
    } catch(error) {
        res.status(404).send({ error });
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});