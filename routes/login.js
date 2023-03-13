const express = require('express');
const router  = express.Router();
//const userQueries = require('../db/schema/05_widgets');

router.get("/", (req, res) => {
  res.render('login')
});

router.post("/", (req, res) => {
const username = req.body.username;
const password = req.body.password;

if (!username || !password){
  return res.status(401).send("please fill both input fields")
}
  let foundUser = null;
  for (const userId in users){
    const user = users[userId];
    if (user.username === username){
      foundUser = user;
    }
  }
  if (!foundUser){
    return res.status(400).send('no user with that username found')
  }

  if (foundUser.password !== password){
    return res.statusMessage(400).send ("username or password incorrect")
  }
  res.cookie('userId,', foundUser.id)

  res.redirect('/')
});

module.exports = router;
