import dotenv from 'dotenv';
import { Router } from 'express';
import userRouter from './user.routes';

dotenv.config();
const router = Router();

const prefix = `${process.env.APP_URI}${process.env.APP_VERSION}`

router.use(prefix + '/users', userRouter);

export default router;
