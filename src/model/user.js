const Pool = require('../config/db');

const createUser = (data) => {
  const {user_id, user_username, user_passwordHash} = data;
  return Pool.query(`INSERT INTO users(user_id, user_username, user_password) 
    VALUES ('${user_id}','${user_username}','${user_passwordHash}')`);
};

const findUsername = (user_username) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users WHERE user_username= '${user_username}' `, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  createUser,
  findUsername,
};
