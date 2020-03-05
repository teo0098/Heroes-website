const express = require('express');
const sheroes_route = require('./db/routes/sheroes');
const sheroesCount_route = require('./db/routes/sheroesCount');
const users_route = require('./db/routes/users');
const crew_route = require('./db/routes/crew');
const bodyParser = require('body-parser');
const path = require('path');

//Add line below to package.json when you are in a development mode
//"proxy": "http://localhost:5000",

const server = express();
const port = process.env.PORT || 5000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
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
}

server.use(sheroes_route);
server.use(sheroesCount_route);
server.use(users_route);
server.use(crew_route);

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('app/build'));

    server.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../build/index.html'));
    });
}

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});