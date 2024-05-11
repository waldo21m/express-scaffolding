import { IUser } from '../interfaces/User.interface';
import User from '../models/User.model';
import MainService from './main.service';

class UserService extends MainService<IUser> {
  constructor() {
    super(User);
  }

  public getInstanceByEmail(email: string): Promise<IUser | null> {
    return this.model.findOne({ email }).exec();
  }
}

export default UserService;
