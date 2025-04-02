import { IGenericRepository } from "../../../Domain/Interfaces/repository.interface";
import { Model, ModelCtor } from "sequelize";

export class GenericRepository<T extends Model<T>> implements IGenericRepository<any>{
  // TODO: Model typing object
  constructor(protected readonly model: any) {}

  async findAll(): Promise<T[]> {
    return await this.model.findAll();
  }

  async findById(id: number): Promise<T | null> {
    return await this.model.findOne({ where: { id } });
  }

  async create(entity: T): Promise<T> {
    return await this.model.create({ data: entity });
  }

  async update(id: number, entity: Partial<T>): Promise<T | null> {
    return await this.model.update(entity, {
      where: { id },
    });
  }

  async delete(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}