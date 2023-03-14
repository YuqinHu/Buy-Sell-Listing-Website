const express = require('express');
const router = express.Router();
const users = require('../db/queries/users')
const db = require('./db/connection');
//const userQueries = require('../db/schema/05_widgets');

router.get("/", (req, res) => {
  req.cookies.userId;
  res.render('login')
});


router.post("/", (req, res) => {
  const username = req.body.email;
  const password = req.body.password;


  db.query('SELECT * FROM users WHERE email=$1 and password=$2', [login_email, login_password], (error, result) => {
    if (error) {
      res.send('error');
  }

  if (result.rows.length > 0) {
      if (result.rows[0]['is_admin'] == 'false') {
          req.session.username = result.rows[0]['name'];
          req.session.email = result.rows[0]['email'];
          req.session.id = result.rows[0]["id"];
          req.session.type = result.rows[0]['type'];
          res.render('pages/home');
      }
      if (result.rows[0]['is_admin'] == 'true') {
          req.session.email = result.rows[0]['email'];
          req.session.username = result.rows[0]['name'];
          req.session.id = result.rows[0]["id"];
          req.session.type = result.rows[0]['type'];
      }
  }
    if (!username || !password) {
      return res.status(401).send("please fill both input fields")
    }
    let foundUser = null;
    for (const userId in users) {
      const user = users[userId];
      if (user.username === username) {
        foundUser = user;
      }
    }
    if (!foundUser) {
      return res.status(400).send('no user with that username found')
    }

    if (foundUser.password !== password) {
      return res.statusMessage(400).send("username or password incorrect")
    }
    res.cookie('userId,', foundUser.id)

    res.redirect('/')

  });
});


module.exports = router;
