const express = require('express');
const router = express.Router();
const Users = require('../schemas/user')

// const authMiddleware = require("../middlewares/auth_middleware");


router.get('/', (req, res) => {
  res.send("users root")
})

router.post('/signup', async (req, res) =>{
  const { nickname, password } = req.body

  const nickRegex = /^[a-zA-Zㄱ-힣0-9-_.]{4,12}$/;
  const pwRegex = /(?=.*\d)(?=.*?[#?!@$%^&*-])(?=.*[a-zA-ZS]).{4,20}/

  const isUser = await Users.find({ nickname })
  // 커스텀 에러 코드 발송하는 방법 찾아보기 
  if(isUser.length){
    return res.status(400).json({ 
      result : false, 
      errorMessage: '이미 존재하는 닉네임입니다.'
    })
  }else if(!nickRegex.test(nickname)|| !pwRegex.test(password)){
    return res.status(400).json({ 
      result : false, 
      errorMessage: 'nickname 또는 password 가 형식에 맞지 않습니다.'
    })
  }

  const createUser = await Users.create({ id:1, nickname, password })
  res.json({ result : '회원가입에 성공했습니다. ' })
})

router.post('/checkid', async (req, res) =>{
  const { nickname } = req.body

  const user = await Users.findOne({ nickname }).exec ();

  if(user){
    return res.status(400).json({ 
      result : false, 
      errorMessage: '이미 사용중인 닉네임입니다. '
    })
  }
  
  res.json({ 
    result : true,
    nickname,
	  msg : '사용 가능한 닉네임입니다'  
  })

})

router.post('/login', async (req, res)=>{
  const { nickname, password } = req.body

  const user = await Users.findOne({ nickname, password }).exec ();
  
  if(!user || password !== user.password){
    return res.status(400).json({ 
      result : false, 
      errorMessage: '아이디 또는 패스워드를 확인해주세요'
    })
  }

  res.send({
    token: jwt.sign({ userId: user._id}, "customized-secret-key")
  })
})



module.exports = router