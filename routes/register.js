const express = require('express');
const router  = express.Router();
//const userQueries = require('../db/schema/05_widgets');

router.get("/", (req, res) => {
  res.render('register')
});

router.post("/", (req, res) => {

  const user_email = req.body.email;
  const user_password = req.body.password;

if (user_email === "" || user_password === ""){
  res.render('register')
} else if (user_email){
  const sqlEmail = `SELECT * FROM users WHERE email = $1`
  const sqlValue = [user_email]
  db.query(sqlEmail,sqlValue)

}


});




module.exports = router;
