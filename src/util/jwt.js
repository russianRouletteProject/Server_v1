require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.token = () => {
  return {
    access(id) {
      return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1 days',
      });
    },
    refresh(id) {
      return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '180 days',
      });
    },
  };
};
