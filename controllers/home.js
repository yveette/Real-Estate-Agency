const { getLastThree, getAll } = require('../services/housing');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const houses = await getLastThree();
    res.render('home', { title: 'Home Page', houses});
});

router.get('/catalog', async (req, res) => {
    const houses = await getAll();
    res.render('catalog', { title: 'Catalog Page', houses });
});

module.exports = router;