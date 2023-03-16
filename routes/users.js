const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
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

module.exports = router;