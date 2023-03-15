const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get("/", (req, res) => {
  req.cookies.userId;
  res.render('register')
});

router.post("/", (req, res) => {
  const { name, email, phone_number, password } = req.body;
  const isAdmin = false;

  db.query('SELECT * FROM users WHERE email = $1', [email])
    .then((result) => {
      if (result.rows.length > 0) {
        throw new Error('Email already exists');
      }

      // Email is unique, so we can insert the new user into the table
      const insertQuery = 'INSERT INTO users (name, email, phone_number, password, is_admin) VALUES ($1, $2, $3, $4, $5) RETURNING *';
      const values = [name, email, phone_number, password, isAdmin];
      return db.query(insertQuery, values);
    })
    .then((result) => {
      // Set the user ID in a cookie to indicate that the user is logged in
      console.log(result);
      res.cookie('userId', result.rows[0].id);
      res.redirect('/');
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});







module.exports = router;
