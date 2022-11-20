const Users = require('../model/user');

exports.userLogin = async (req, res) => {
  const { nickname, password } = req.body;
  const user = await Users.findOne({ nickname, password }).exec();
  console.log(user);

  // if (userData.status === 200) {
  //   res.json(userData.jwt);
  // } else {
  //   res.send('ERROR');
  // }
};
