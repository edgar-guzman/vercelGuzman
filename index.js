const express = require('express');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const app = express();
const PORT = 3000;

// View Templating Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'));
// app.use('/images', express.static(__dirname + 'public/images'));
// app.use('/scripts', express.static(__dirname + 'public/scripts'));

app.get('/', (req, res) => {
    // res.send('Home Page Route');
    res.render('pages/index', {
        message: 'EJS Home Page Route'
    });
});

app.get('/about', (req, res) => {
    res.send('About Page Route');
});

app.get('/portfolio', (req, res) => {
    res.send('Portfolio Page Route');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page Route');
});

app.listen(PORT, () => {
    console.log(`Express Server running on http://localhost:${PORT}`)
})