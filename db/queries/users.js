const db = require('../connection');

const getUsers = (name) => {
  return db.query('SELECT * FROM users WHERE name = $1;', [name])
    .then(data => {
      return data.rows;
    });
};

const getUserByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1;', [email])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUsers, getUserByEmail };
