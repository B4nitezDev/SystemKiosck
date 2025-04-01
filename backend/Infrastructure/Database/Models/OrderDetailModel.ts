import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { PurchaseOrdersModel } from "./PurchaseOrdersModel";

interface OrderDetailAttributes {
  id: number;
  orderId: number;
  quantity: number;
  unitPrice: number;
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}

interface OrderDetailCreationAttributes extends Optional<OrderDetailAttributes, "id"> {}

export class OrderDetailModel extends Model<OrderDetailAttributes, OrderDetailCreationAttributes> implements OrderDetailAttributes {
  public id!: number;
  public quantity!: number;
  public orderId!: number;
  public unitPrice!: number;
  public total!: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  private readonly Order!: PurchaseOrdersModel;
}

export const initOrderDetailModel: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  OrderDetailModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: PurchaseOrdersModel,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    unitPrice: {
      type: DataTypes.DECIMAL(10, 2),
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
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
  },{
    tableName: "OrderDetails",
    sequelize,
  })
}