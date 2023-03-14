const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get("/", (req, res) => {
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
      const insertQuery = 'INSERT INTO users (name, email, phone_number, password, is_admin) VALUES ($1, $2, $3, $4, $5)';
      const values = [name, email, phone_number, password, isAdmin];

      return db.query(insertQuery, values);
    })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});
//   const user_email = req.body.email;
//   const user_password = req.body.password;

// if (user_email === "" || user_password === ""){
//   res.render('register')
// } else if (user_email){
//   const sqlEmail = `SELECT * FROM users WHERE email = $1`
//   const sqlValue = [user_email]
//   db.query(sqlEmail,sqlValue)

// }





module.exports = router;
