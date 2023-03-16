const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.post('/:id', (req, res) => {
  const { id } = req.params
  console.log(req.body);
  return db
  .query('DELETE FROM items WHERE id = $1', [id])
  .then((items) => {
    res.redirect('/admin');
    return items.rows;
  })
});

module.exports = router;