import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { EmployeeModel } from "./EmployeeModel";
import { PurchaseOrdersModel } from "./PurchaseOrdersModel";
import { ProductModel } from "./ProductModel";

interface KioskAttributes {
  id: number;
  name: string;
  address?: string;
  description?: string;
  phone?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: number;
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
  public updatedBy?: number;
  public createBy?: number;

  // Relaciones
  public readonly employees?: EmployeeModel[];
  public readonly purchaseOrders?: PurchaseOrdersModel[];
  public readonly Products?: ProductModel[];
}

export const initKioskModel: (sequelize: Sequelize) => void = (sequelize: Sequelize) => {
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
      updatedBy: {
        type: DataTypes.INTEGER,
      },
      createBy: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Kiosks",
      paranoid: true,
      deletedAt: "deletedAt",
      sequelize,
      version: true
    }
  );
};
