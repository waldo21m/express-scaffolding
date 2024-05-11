import { Model, Document, UpdateQuery } from 'mongoose';

class MainService<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public create(createObject: Partial<T>): Promise<T> {
    const instance = new this.model(createObject);

    return instance.save();
  }

  public findAll(limit: number, offset: number): Promise<T[]> {
    return this.model.find().skip(offset).limit(limit).exec();
  }

  public findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  public update(
    id: string,
    updateObject: UpdateQuery<T>,
  ): Promise<T | null> {
    return this.model
      .findByIdAndUpdate(id, updateObject, { new: true })
      .exec();
  }

  public delete(id: string): Promise<T | null> {
    return this.model
      .findByIdAndUpdate(id, { isDeleted: true }, { new: true })
      .exec();
  }

  public hardDelete(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}

export default MainService;
