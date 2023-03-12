const express = require('express');
const { route } = require('./login');
const router  = express.Router();
//const userQueries = require('../db/schema/05_widgets');

router.post("/logout", (req, res) => {

  res.redirect("/");
});

module.exports = router;
