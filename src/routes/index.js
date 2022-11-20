const express = require('express');
const router = express.Router();
const user=require("./users")

router.get('/', (req, res) => {
  res.send('루트 URL');
});


router.use('/user', user);


module.exports = router;

