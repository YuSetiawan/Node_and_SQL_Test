const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authHelper = require('../helper/auth');
const commonHelper = require('../helper/common');
const {v4: uuidv4} = require('uuid');
let {createUser, findUsername} = require('../model/user');

let userController = {
  registerUser: async (req, res) => {
    let {user_username, user_password} = req.body;
    const {rowCount} = await findUsername(user_username);
    if (rowCount) {
      return res.json({message: 'Email Already Taken'});
    }
    const user_id = uuidv4();
    const user_passwordHash = bcrypt.hashSync(user_password);

    const data = {
      user_id,
      user_username,
      user_passwordHash,
    };
    createUser(data)
      .then((result) => commonHelper.response(res, result.rows, 201, 'Create User Success'))
      .catch((err) => res.send(err));
  },
  loginUser: async (req, res) => {
    const {user_username, user_password} = req.body;
    const {
      rows: [user],
    } = await findUsername(user_username);
    if (!user) {
      return res.json({message: 'Email Wrong'});
    }
    const isValidPassword = bcrypt.compareSync(user_password, user.user_password);
    if (!isValidPassword) {
      return res.json({message: 'Password Wrong'});
    }
    delete user.user_password;
    const payload = {
      user_username: user.user_username,
      role_user: user.role_user,
    };
    user.token_user = authHelper.generateToken(payload);
    user.refreshToken = authHelper.generateRefreshToken(payload);
    commonHelper.response(res, user, 201, 'Login Successful');
  },

  profileUser: async (req, res) => {
    const user_username = req.payload.user_username;
    const {
      rows: [user],
    } = await findUsername(user_username);
    delete user.user_password;
    commonHelper.response(res, user, 200);
  },

  refreshToken: (req, res) => {
    const refreshToken = req.body.refreshToken;
    const decoded = jwt.verify(refreshToken, process.env.SECRETE_KEY_JWT);
    const payload = {
      user_username: decoded.user_username,
      role_user: decoded.role_user,
    };
    const result = {
      token_user: authHelper.generateToken(payload),
      refreshToken: authHelper.generateRefreshToken(payload),
    };
    commonHelper.response(res, result, 200);
  },
};

module.exports = userController;
