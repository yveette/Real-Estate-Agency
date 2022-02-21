const authController = require('../controllers/auth');
// TODO add other controllers....

module.exports = (app) => {
    app.use(authController);

    // TODO add not found page
    app.get('*', (req, res) => {
        res.status(404).render('404', { title: 'Page Not Found!' });
    });
};