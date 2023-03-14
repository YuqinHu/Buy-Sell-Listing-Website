const express = require('express');
const router = express.Router();
// const users = require('../db/queries/users')
// const db = require('./db/connection');
//const userQueries = require('../db/schema/05_widgets');

router.get("/", (req, res) => {
  req.cookies.userId;
  res.render('login')
});


// router.post("/", (req, res) => {
//   // const username = req.body.email;
//   // const password = req.body.password;
//   const { email, password } = req.body;

//   // Check if user with given email exists
//   return db
//   .query('SELECT * FROM users WHERE email = $1', [email])
//   .then((result) => {
//     const user = result.rows[0];
//     if (!user) {
//       throw new Error('Invalid email or password');
//     }
//     if (!user.rows[0].password) {
//       throw new Error('Invalid email or password');
//     }
//     const token = jwt.sign({ userId: user.id }, 'your_secret_key');
//     res.send({ token });
//   })
//   .catch((err) => {
//     res.status(401).send(err.message);
//   });
// });

//   // Generate JWT token
//   const token = jwt.sign({ userId: user.rows[0].id }, 'your_secret_key');
//   res.send({ token });
//     // if (!username || !password) {
//     //   return res.status(401).send("please fill both input fields")
//     // }
//     // let foundUser = null;
//     // for (const userId in users) {
//     //   const user = users[userId];
//     //   if (user.username === username) {
//     //     foundUser = user;
//     //   }
//     // }
//     // if (!foundUser) {
//     //   return res.status(400).send('no user with that username found')
//     // }

//     // if (foundUser.password !== password) {
//     //   return res.statusMessage(400).send("username or password incorrect")
//     // }
//     // res.cookie('userId,', foundUser.id)

//     // res.redirect('/')

//   });
// // }


module.exports = router;
