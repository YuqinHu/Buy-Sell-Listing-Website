const express = require('express');
const router  = express.Router();
//const userQueries = require('../db/schema/05_widgets');

router.get("/", (req, res) => {
  res.render('register')
});

module.exports = router;
