import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) =>{
  res.send('This is UserRouter');
})

router.post('/login', (req: Request, res: Response, next: NextFunction) =>{
  res.send('This is login');
})

router.post('/signup', (req: Request, res: Response, next: NextFunction) =>{
  res.send('This is signup');
})


module.exports = router;