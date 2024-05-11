import { IUser } from '../interfaces/User.interface';
import User from '../models/User.model';

export const findAll = async (offset: number, limit: number) => {
  const users = await User.find({ isDeleted: false }).skip(offset).limit(limit);

  return users;
};

export const findById = async (id: string) => {
  const users = await User.findOne({ _id: id, isDeleted: false });

  return users;
};

export const findByEmail = async (email: string) => {
  const users = await User.findOne({ email, isDeleted: false });

  return users;
};

export const create = async (user: IUser) => {
  const newUser = new User(user);
  const savedUser = await newUser.save();

  return savedUser;
};

export const update = async (id: string, user: Partial<IUser>) => {
  return User.updateOne(
    {
      _id: id,
      isDeleted: false
    },
    user
  );
};

export const softDelete = async (id: string) => {
  return User.updateOne({ _id: id }, { isDeleted: true });
};

export const hardDelete = async (id: string) => {
  return User.deleteOne({ _id: id });
};
