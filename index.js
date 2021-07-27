const express = require('express');
const routes = require('./routes');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const app = express();
const PORT = 3000;

// View Templating Engine
app.set('view engine', 'ejs');

// Rerouting Files
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Express Server running on http://localhost:${PORT}`)
})