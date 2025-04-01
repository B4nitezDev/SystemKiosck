import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { ReceiptModel } from "./ReceiptModel";

interface ReceiptDetailAttributes {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  quantity: number;
  observation?: string;
  receiptId: number;
}

interface ReceiptDetailCreationAttributes extends Optional<ReceiptDetailAttributes, "id"> {}

export class ReceiptDetailModel extends Model<ReceiptDetailAttributes, ReceiptDetailCreationAttributes> implements ReceiptDetailAttributes {
  public id!: number;
  public quantity!: number;
  public observation?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;
  public receiptId!: number;

  public readonly receipt!: ReceiptModel;
}

export const initReceiptDetailModel: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  ReceiptDetailModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observation: {
      type: DataTypes.STRING,
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
    },
    receiptId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ReceiptModel,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }
  }, {
    tableName: "ReceiptDetails",
    sequelize,
  })
}

