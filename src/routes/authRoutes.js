import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getUserInfo,
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
} from '../controllers/authController.js';
import {
  loginUserSchema,
  registerUserSchema,
} from '../validations/authValidation.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.post('/user/register', celebrate(registerUserSchema), registerUser);
router.post('/user/login', celebrate(loginUserSchema), loginUser);
router.post('/user/logout', logoutUser);

router.post('/user/refresh', refreshUserSession);
router.get('/user/user-info', authenticate, getUserInfo);

export default router;
