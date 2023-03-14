const express = require('express');
const router  = express.Router();
//const userQueries = require('../db/schema/05_widgets');

router.post("/", (req, res) => {

const searchtext = req.body.searchtext

if (!searchtext ){
  return res.status(401).send("please fill seach field")
}

});

module.exports = router;
