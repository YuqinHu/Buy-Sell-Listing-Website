const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
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

module.exports = router;