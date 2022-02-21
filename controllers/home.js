const { getLastThree } = require('../services/housing');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const houses = await getLastThree();
    res.render('home', { title: 'Home Page', houses});
});

module.exports = router;