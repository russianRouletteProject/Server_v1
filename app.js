const express = require('express');
const {createServer} = require("http") //http 모듈 불러오기
const app = express();
const http = createServer(app);
const port = 8080;
const routes = require("./routes"); // 라우트 인덱스 연결 
const connect = require("./schemas"); // 
connect();

// const cors = require('cors')
// const corsOption = {
//   origin: [
//     "http://localhost:3000",
//     "http://localhost:8080",
//   ],
//   credentials: true,
// };
// app.use(cors(corsOption));

app.use("/", express.json(), routes);

app.listen(port, () => {
  console.log(port, '포트로 서버연결');
});