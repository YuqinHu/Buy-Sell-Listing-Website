const express = require('express');
const router = express.Router();
const users = require('../db/queries/users')


router.get('/', (req, res) => {
  users.getUserByEmail(req.body.email)
  .then((response) => {

    let templateVars = {
    username: response.name,
    email: response.email}

    res.render('user_profile', templateVars);
  })
});

router.post('/user_profile', (req, res) => {

});

module.exports = router;
