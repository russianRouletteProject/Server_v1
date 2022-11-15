import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 8080;
const router = express.Router();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hi! This is rootServer');
});

app.use('/user', require("./routes/userRouter"))

app.listen(port, () => {
  console.log('server port: ' + port);
});
