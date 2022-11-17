const jwt = require("jsonwebtoken");

export const createAccessToken = () => {
  const accessToken = jwt.sign(
    {userId: user._id}, 
    "customized-secret-key",
    { expiresIn: '1d' }
  )
}

export const  createRefreshToken = () => {
  const refreshToken = jwt.sign(
    {}, 
    "customized-secret-key", 
    { expiresIn: '7d' }
  ) 
}

