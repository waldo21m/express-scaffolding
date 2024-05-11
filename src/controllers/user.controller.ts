import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import { IUser } from '../interfaces/User.interface';
import * as UserService from '../services/user.service';

const findAll = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.findAll(0, 20);

    return res.json(users);
  } catch (error) {
    next(boom.badImplementation('Failed to fetch users'));
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await UserService.create(req.body as IUser);

    return res.status(201).json(newUser);
  } catch (error) {
    next(boom.badImplementation('Failed to create user'));
  }
};

export default {
  findAll,
  create,
};
