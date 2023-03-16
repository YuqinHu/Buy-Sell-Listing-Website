const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  const username = req.cookies.username;
  templateVars = {
      user: username,
  };
  res.render('sell', templateVars);
});

router.post('/', (req, res) => {
  const { title, description, price, category, photoUrl } = req.body;
  let user_id = req.cookies.userId;
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
    .query(`
    INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id
  `,
      [user_id, nicheId, title, description, price, photoUrl])
    .then((result) => {
      res.redirect('/admin');
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      return null;

    });
});

module.exports = router;
