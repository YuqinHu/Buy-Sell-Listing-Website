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
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const registerRoute = require("./routes/register");
const sellRoute = require("./routes/sell");
const adminRoute = require("./routes/admin");
const userProfileRoute = require("./routes/user_profile");
const soldRoute = require("./routes/sold");
const featureRoute = require("./routes/feature");
const favouriteRoute = require("./routes/favourite");
const deleteRoute = require("./routes/delete");
// const userProfileRoute = require("./routes/user_profile");
// const productRoute = require("./routes/:id.js");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/register', registerRoute);
app.use('/admin', adminRoute);
app.use('/sell', sellRoute);
app.use('/user_profile', userProfileRoute);
app.use('/sold', soldRoute);
app.use('/feature', featureRoute);
app.use('/favourite', favouriteRoute);
app.use('/delete', deleteRoute);
// app.use('/register', userProfileRoute);
// app.use('/:id', productRoute);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


app.get('/', (req, res) => {
  //return to login page if not login
  if (!req.cookies.userId) {
    res.render('login');
    return;
  }
  const username = req.cookies.username;
  const id = req.cookies.userId;
  templateVars = {
      user: username,
  };
  if (id == 1) {
    return db
    .query('SELECT items.id as item_id, items.name as item_name, price, niches.name as niche_name, description, photo_url FROM items JOIN niches ON items.niche_id = niches.id WHERE is_sold = false')
    .then((items) => {
      templateVars = {
          user: username,
          items: items.rows
      };
      res.render('admin', templateVars);
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
  }
  res.render('index', templateVars);
});

app.get('/users', (req, res) => {
  //return to login page if not login
  if (!req.cookies.userId) {
    res.render('login');
    return;
  }

  return db
  .query('SELECT items.name as item_name, price, niches.name as niche_name, description, photo_url, users.email as email FROM items JOIN niches ON items.niche_id = niches.id JOIN users ON users.id = items.user_id WHERE user_id = 1')
  .then((items) => {
    console.log(items.rows);
    const username = req.cookies.username;
    templateVars = {
        user: username,
        items: items.rows
    };
    res.render('users', templateVars);
  })
  .catch((err) => {
    console.log(err.message);
    return null;
  });

});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
