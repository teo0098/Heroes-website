const express = require('express');
require('./db/dbconnection');

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

server.get('/sheroes', (req, res) => {
    res.send({welcome: "WELCOME"});
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});