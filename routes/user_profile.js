const express = require('express');
const router  = express.Router();
//const userQueries = require('../db/schema/05_widgets');

router.get('/', (req, res) => {
  req.cookies.userId;
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
