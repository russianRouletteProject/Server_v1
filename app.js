const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
const routes = require('./src/routes'); // 라우트 인덱스 연결
const connect = require('./src/model'); //
const cookieParser = require('cookie-parser');

const corsOption = {
  origin: ['http://localhost:3000', 'http://localhost:8080'],
  credentials: true,
};

app.use(cors(corsOption));

connect();

app.use('/', express.json(), routes);

app.listen(port, () => {
  console.log(port, '포트로 서버연결');
});
