const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({ username: decoded.username });
        if (!user) throw '';
        req.user = user;
        next();
    } catch(error) {
        res.send({ error: 'Please log in' });
    }
};

module.exports = auth;