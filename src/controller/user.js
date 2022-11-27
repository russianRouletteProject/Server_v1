const Users = require('../model/user');

// exports.userLogin = async (req, res) => {
//   const { nickname, password } = req.body;
//   const user = await Users.findOne({ nickname, password }).exec();

//   // if (userData.status === 200) {
//   //   res.json(userData.jwt);
//   // } else {
//   //   res.send('ERROR');
//   // }
// };

exports.userSignup = async (req, res) => {
  const { nickname, password } = req.body;

  const nickRegex = /^[a-zA-Zㄱ-힣0-9-_.]{4,12}$/;
  const pwRegex = /(?=.*\d)(?=.*?[#?!@$%^&*-])(?=.*[a-zA-ZS]).{4,20}/;

  // if (!nickRegex.test(nickname) || !pwRegex.test(password)) {
  //   return res.status(400).json({
  //     result: false,
  //     errorMessage: 'nickname 또는 password 가 형식에 맞지 않습니다.',
  //   });
};
