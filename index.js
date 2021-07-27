const express = require('express');
const routes = require('./routes');
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

// Rerouting Files
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Express Server running on http://localhost:${PORT}`)
})