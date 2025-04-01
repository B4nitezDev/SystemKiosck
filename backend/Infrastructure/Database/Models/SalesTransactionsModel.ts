import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { KioskModel } from "./KioskModel";
import { EmployeeModel } from "./EmployeeModel";

interface SalesTransactionsAttributes {
  id: number;
  date: Date;
  detail: string;
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  kioskId: number;
  employeeId: number;
}

interface SalesTransactionsCreationAttributes extends Optional<SalesTransactionsAttributes, "id"> {}

export class SalesTransactionsModel extends Model<SalesTransactionsAttributes, SalesTransactionsCreationAttributes> implements SalesTransactionsAttributes {
  public id!: number;
  public date!: Date;
  public detail!: string;
  public kioskId!: number;
  public total!: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;
  public employeeId!: number;

  public readonly kiosk!: KioskModel;
  public readonly Employee!: EmployeeModel;
}

export const initSalesTransactionsModel: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  SalesTransactionsModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: EmployeeModel,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    kioskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: KioskModel,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    detail: {
      type: DataTypes.STRING,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: "SalesTransactions",
    sequelize
  })
}