const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  if (!req.cookies.userId) {
    res.render('login');
    return;
  }
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
});

router.post('/:id', (req, res) => {
  const { id } = req.params;
  const userId = req.cookies.userId;
  return db
  .query('INSERT INTO favourites (user_id, item_id) VALUES ($1, $2)', [userId, id])
  .then((items) => {
    res.redirect('/users');
    return items.rows;
  })
});

router.post('/cancel/:id', (req, res) => {
  const { id } = req.params;
  return db
  .query('DELETE FROM favourites WHERE item_id = $1', [id])
  .then((items) => {
    res.redirect('/favourite');
    return items.rows;
  })
});



module.exports = router;
