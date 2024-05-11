import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get('/', userController.findAll);
router.post('/', userController.create);

export default router;