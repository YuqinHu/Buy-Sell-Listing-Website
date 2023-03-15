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
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const registerRoute = require("./routes/register");
const sellRoute = require("./routes/sell");
const userProfileRoute = require("./routes/user_profile");
// const userProfileRoute = require("./routes/user_profile");
const productRoute = require("./routes/product_id.js");
const usersRoutes = require('./routes/users-api');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/register', registerRoute);
app.use('/sell', sellRoute);
app.use('/user_profile', userProfileRoute);
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
  templateVars = {
      user: username,
  };
  res.render('index', templateVars);
});

app.get('/users', (req, res) => {
  //return to login page if not login
  if (!req.cookies.userId) {
    res.render('login');
    return;
  }

  return db
  .query('SELECT items.name as item_name, price, niches.name as niche_name, description, photo_url FROM items JOIN niches ON items.niche_id = niches.id WHERE user_id = 1')
  .then((items) => {
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
