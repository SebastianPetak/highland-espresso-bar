const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const path = require('path');

// view engine setup ==========================================================
app.set('views engine', 'ejs');

// setup static files ========================================================
app.set('views', path.join(__dirname, 'views'));

// Launch =====================================================================
app.listen(port);
