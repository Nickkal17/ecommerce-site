const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

//setting views and layouts
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

//Middleware
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false}));
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));

//Routes
const indexRoutes = require('./routes/index');

//Implement Routes
app.use('/', indexRoutes);

//Connect Database

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Connect to port ${port}`);
});