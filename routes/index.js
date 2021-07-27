const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Home Page Route');
    // res.render('pages/index', {
    //     message: 'EJS Home Page Route'
    // });

    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('index')
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