const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Home Page Route');
    res.render('pages/index', {
        message: 'EJS Home Page Route'
    });
});

router.get('/about', (req, res) => {
    res.send('About Page Route');
});

router.get('/portfolio', (req, res) => {
    res.send('Portfolio Page Route');
});

router.get('/contact', (req, res) => {
    res.send('Contact Page Route');
});

module.exports = router;