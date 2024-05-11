import { Document, Types } from 'mongoose';
import { UserTypes } from '../utils/userTypes.enum';

export interface IUser extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  userType: UserTypes;
  createdContents: Types.ObjectId[];
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
