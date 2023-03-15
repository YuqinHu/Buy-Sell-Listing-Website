const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('user_profile');
});

router.post('/user_profile', (req, res) => {

});

module.exports = router;
