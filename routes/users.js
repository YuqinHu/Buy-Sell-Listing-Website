const express = require('express');
const router = express.Router();
const db = require('../db/connection');

const getFavouriteItems = () => {
  return db
  .query('SELECT * FROM items WHERE id IN (SELECT item_id FROM favourites WHERE user_id = $1);', [req.cookies.userId] )
  .then((items) => {
    const username = req.cookies.username;
    const userId = req.cookies.userId;
    templateVars = {
        user: username,
        id: userId,
        items: items.rows
    };
    res.render('favourite', templateVars);
  })
  .catch((err) => {
    console.log(err.message);
    return null;
  });
}

router.get('/', (req, res) => {
  //return to login page if not login
  if (!req.cookies.userId) {
    res.render('login');
    return;
  }
  let order = "ASC";
  if (req.query.priceFilter === "high-to-low") {
    order = "DESC";
  }
  return db
  .query(`SELECT items.name as item_name, items.id as item_id, price, niches.name as niche_name, description, photo_url, users.email as email FROM items JOIN niches ON items.niche_id = niches.id JOIN users ON users.id = items.user_id WHERE items.is_sold = false ORDER BY price ${order}`)
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

module.exports = router;