const express = require('express');
const User = require('../models/user');
require('../dbconnection');
const router = express.Router();
const auth = require('../middleware/auth');

router.patch('/crew/add', auth, async (req, res) => {
    try {
        const newCrew = req.user.crew;
        const heroExists = newCrew.find(hero => hero === req.body.hero);
        if (heroExists !== undefined) return res.send({ exists: 'You have already added this hero.' });
        newCrew.push(req.body.hero);
        await User.findOneAndUpdate({ username: req.user.username }, { crew: newCrew }, { new: true, useFindAndModify: false });
        res.send({ success: 'Hero has been added successfully.' });
    } catch(error) {
        res.send({ error: 'Unable to add hero, please try again later.' });
    }
});

router.get('/crew', auth, async (req, res) => {
    try {
        res.send({ crew: req.user.crew });
    } catch(error) {
        res.send({ error: 'Unable to fetch heroes, please try again later.' });
    }
});

router.delete('/crew/del/:hero', auth, async (req, res) => {
    try {
        const newCrew = req.user.crew;
        const removeHero = newCrew.filter(hero => hero !== req.params.hero);
        await User.findOneAndUpdate({ username: req.user.username }, { crew: removeHero }, { new: true, useFindAndModify: false });
        res.send({ success: `${req.params.hero} has been successfully removed.`, newHeroes: removeHero });
    } catch(error) {
        res.send({ error: 'Unable to remove hero, please try again later.' });
    }
});

module.exports = router;