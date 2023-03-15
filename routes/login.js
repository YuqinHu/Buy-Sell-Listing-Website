const express = require('express');
const router = express.Router();
// const users = require('../db/queries/users')
const db = require('../db/connection');
//const userQueries = require('../db/schema/05_widgets');

router.get("/", (req, res) => {
  req.cookies.userId;
  res.render('login')
});


router.post("/", (req, res) => {
  const { email, password } = req.body;
  return db
  .query('SELECT * FROM users WHERE email = $1', [email])
  .then((result) => {
    if (result.rows[0].length === 0) {
      throw new Error('User not found');
    }
    if (result.rows[0].password !== password) {
      throw new Error('Invalid password');
    }
    res.cookie('userId', result.rows[0].id); 
    res.cookie('username', result.rows[0].name); 
    if (result.rows[0].is_admin === true){
      res.redirect('/sell');
    } else {
      res.redirect('/');
    }
  })
  .catch((err) => {
    res.status(401).send(err.message);
  });
});


module.exports = router;
