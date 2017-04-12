const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const path = require('path');

// view engine setup ==========================================================
app.set('views', path.join(__dirname, 'views/pages'));
app.set('views engine', 'ejs');

// setup static files =========================================================
app.use(express.static(path.join(__dirname, 'views/js')));
app.use(express.static(path.join(__dirname, 'views/assets/')));
app.use(express.static(path.join(__dirname, 'views/css/')));

// Launch =====================================================================
app.listen(port);
