const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  if (!req.cookies.userId) {
    res.render('login');
    return;
  }
  return db
  .query('SELECT items.id as item_id, items.is_featured as is_feature, items.name as item_name, items.price, items.description, items.photo_url FROM favourites JOIN items ON items.id = favourites.item_id WHERE favourites.user_id = $1;', [req.cookies.userId] )
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
});

router.post('/cancel/:id', (req, res) => {
  const { id } = req.params
  console.log(req.body);
  return db
  .query('UPDATE items SET is_favourite = false WHERE id = $1', [id])
  .then((items) => {
    res.redirect('/admin');
    return items.rows;
  })
});

router.post('/:id', (req, res) => {
  const { id } = req.params
  console.log(req.body);
  return db
  .query('UPDATE items SET is_favourite = true WHERE id = $1', [id])
  .then((items) => {
    res.redirect('/admin');
    return items.rows;
  })
});

module.exports = router;
