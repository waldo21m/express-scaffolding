import Joi from 'joi';
import { CreateUserTypes } from '../utils/userTypes.enum';

export const createUserSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  userType: Joi.string().valid(...Object.values(CreateUserTypes)),
});
