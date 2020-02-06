const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    callname: {
        type: String
    },
    realname: {
        type: String
    },
    birthPlace: {
        type: String
    },
    agroups: {
        type: Array
    },
    abilities: {
        type: Array
    },
    picture: {
        type: String
    }
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;