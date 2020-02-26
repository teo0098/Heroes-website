const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    crew: {
        type: Array,
        required: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;