 // load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


const db = require('./db/connection');
// const multer = require('multer');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // populates req.body
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const homeRoute = require("./routes/home");
const userRoute = require("./routes/users");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const registerRoute = require("./routes/register");
const sellRoute = require("./routes/sell");
const adminRoute = require("./routes/admin");
const userProfileRoute = require("./routes/user_profile");
const soldRoute = require("./routes/sold");
const featureRoute = require("./routes/feature");
const deleteRoute = require("./routes/delete");
// const userProfileRoute = require("./routes/user_profile");
// const productRoute = require("./routes/:id.js");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/', homeRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/register', registerRoute);
app.use('/admin', adminRoute);
app.use('/sell', sellRoute);
app.use('/user_profile', userProfileRoute);
app.use('/sold', soldRoute);
app.use('/feature', featureRoute);
app.use('/delete', deleteRoute);
// app.use('/register', userProfileRoute);
// app.use('/:id', productRoute);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
