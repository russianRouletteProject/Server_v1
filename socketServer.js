const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io');

const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const PORT = 4000;

io.on('connection', socket => {
  console.log('연결이 이루어졌습니다.');

  socket.on('chatting', data => {
    const { nickname, msg, userImg } = data;
    console.log(data);
    io.emit('chatting', {
      nickname,
      msg,
      userImg, // 이름이 똑같기 때문에 ES6에서 생략 가능
      // time: moment(new Date()).format('h:ss A'),
      // "YYYY-MM-DD HH:mm:ss" 요건 예시로 참고  A 는 오전/오후 구분
    });
  });
}); // 커넥션이 이루어지면 연결과 관련된 모든 것을 소켓이 담을거야

server.listen(PORT, () => console.log(`server is running : ${PORT}`)); // 파라미터값, 포트 + 실행할 명령어
