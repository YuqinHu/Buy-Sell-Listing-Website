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
    .query(`
    INSERT INTO items (niche_id, name, description, price, photo_url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
  `,
      [nicheId, title, description, price, photoUrl])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      return null;

    });
});

module.exports = router;
