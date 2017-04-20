const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const port = process.env.PORT || 8001;
const path = require('path');

const routes = require('./app/routes.js');

// view engine setup ==========================================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// setup static files =========================================================
app.use(express.static(path.join(__dirname, 'views/styles')));
app.use(express.static(path.join(__dirname, 'views/assets')));
app.use(express.static(path.join(__dirname, 'views/js')));

// serve Favicon ==============================================================
app.use(favicon(path.join(__dirname, 'views', 'assets', 'coffee-favicon',
													'favicon.ico')));

// Launch =====================================================================
routes(app);
app.listen(port);
