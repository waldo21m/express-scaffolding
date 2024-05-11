import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.get('/', userController.findAll);
router.post('/', userController.create);

export default router;
