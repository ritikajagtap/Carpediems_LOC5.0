const jwt = require('jsonwebtoken');
const env = require('dotenv');
const path = require('path')
env.config({ path: './.env' });

const signToken = (id) => {

    const data = {
      user: {
          id,
      },
    }

    return jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

};

module.exports = signToken;