const router = require('express').Router();

const { isUser, isOwner } = require('../middleware/guards');
const { createHousing } = require('../services/housing');
// const preload = require('../middleware/preload');
const mapErrors = require('../util/mappers');


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page', data: {} });
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    const house = {
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        city: req.body.city,
        homeImg: req.body.homeImg,
        description:req.body.description,
        pieces: req.body.pieces,
        owner: req.session.user._id
    };
    console.log(house);

    try {
        await createHousing(house);
        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Page', data: house, errors });
    }
});

module.exports = router;