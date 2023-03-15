const express = require('express');
const { route } = require('./login');
const router  = express.Router();
//const userQueries = require('../db/schema/05_widgets');

router.post("/", (req, res) => {
  console.log("logout")
  res.clearCookie('userId');
  res.clearCookie('username');
  res.redirect("/");
});

module.exports = router;
