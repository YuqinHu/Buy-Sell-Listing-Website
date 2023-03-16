const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.post('/:id', (req, res) => {
  console.log(req.params)
  const { id } = req.params
  console.log(req.body);
  return db
  .query('UPDATE items SET is_sold = true WHERE id = $1', [id])
  .then((items) => {
    res.redirect('/admin');
    return items.rows;
  })
});

module.exports = router;