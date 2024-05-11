import { Request, Response } from 'express';

interface User {
  firstName: string;
  lastName: string;
}

export const mockUsers: User[] = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Doe' },
  { firstName: 'Jim', lastName: 'Smith' },
  { firstName: 'Jill', lastName: 'Johnson' },
  { firstName: 'Joe', lastName: 'Brown' },
];

const findAll = (_: Request, res: Response) => {
  return res.json(mockUsers);
};

const create = (req: Request, res: Response) => {
  const newUser = req.body;

  return res.json(newUser);
};

export default {
  findAll,
  create,
};
