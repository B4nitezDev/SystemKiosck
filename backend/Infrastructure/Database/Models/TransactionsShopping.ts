import { TransactionsShoppingState } from "../../../Domain/Enums/TransactionsShoppingState";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { KioskModel } from "./KioskModel";
import { EmployeeModel } from "./EmployeeModel";

interface TransactionsShoppingAttributes {
  id: number;
  date: Date;
  detail: string;
  total: number;
  status: TransactionsShoppingState;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  kioskId: number;
  employeeId: number;
}

interface TransactionsShoppingCreationAttributes extends Optional<TransactionsShoppingAttributes, "id"> {}

export class TransactionsShoppingModel extends Model<TransactionsShoppingAttributes, TransactionsShoppingCreationAttributes> implements TransactionsShoppingAttributes {
  public id!: number;
  public date!: Date;
  public detail!: string;
  public total!: number;
  public status!: TransactionsShoppingState;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;
  public kioskId!: number;
  public employeeId!: number;

  public readonly kiosk!: KioskModel;
  public readonly Employee!: EmployeeModel;
}

export const initTransactionsShopping: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  TransactionsShoppingModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    status: {
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
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: "TransactionsShopping",
    paranoid: true,
    deletedAt: "deletedAt",
    sequelize,
    version: true
  })
}