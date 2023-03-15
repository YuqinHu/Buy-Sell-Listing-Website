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

app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/register', registerRoute);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


app.get('/', (req, res) => {
  //return to login page if not login
  if (!req.cookies.userId) {
    res.render('login');
    return;
  }
  res.render('index');
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
    res.render('users', { items: items.rows });
  })
  .catch((err) => {
    console.log(err.message);
    return null;
  });

});

app.get('/sell', (req, res) => {
  res.render('sell');
});

app.get('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/login');
});


app.post('/sell', (req, res) => {
  const { title, description, price, category } = req.body;
  const photoUrl = "www.textURL.com";
  let nicheId = null;

  switch (category) {
    case 'clothing':
      nicheId = 2;
      break;
    case 'electronics':
      nicheId = 1;
      break;
    case 'home':
      nicheId = 3;
      break;
    default:
      res.status(400).send('Invalid category');
      return;
  }
  return db
    .query( `
    INSERT INTO items (niche_id, name, description, price, photo_url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
  `,
  [ nicheId, title, description, price, photoUrl])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
    return null;
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
