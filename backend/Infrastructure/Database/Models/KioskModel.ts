import { DataTypes, Model, Optional } from "sequelize";
import { DbContext } from "../Config/database";
import { EmployeeModel } from "./EmployeeModel";

interface KioskAttributes {
  id: number;
  name: string;
  address?: string;
  description?: string;
  phone?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
  updateBy?: number;
  createBy?: number;
}

interface KioskCreationAttributes extends Optional<KioskAttributes, "id"> {}

export class KioskModel extends Model<KioskAttributes, KioskCreationAttributes>
  implements KioskAttributes {
  public id!: number;
  public name!: string;
  public address?: string;
  public description?: string;
  public phone?: string;
  public email?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updateBy?: number;
  public createBy?: number;

  // Relaciones
  public readonly employees?: EmployeeModel[];
}

export const initKioskModel = () => {
  KioskModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      updateBy: {
        type: DataTypes.INTEGER,
      },
      createBy: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Kiosks",
      sequelize: DbContext,
    }
  );
};
