import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { KioskModel } from "./KioskModel";
import { OrderDetailModel } from "./OrderDetailModel";
import { ReceiptDetailModel } from "./ReceiptDetailModel";

interface ProductAttributes {
  id: number;
  name: string;
  description?: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  kioskId?: number;
  skuCode: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

export class ProductModel extends Model<ProductAttributes, ProductCreationAttributes> implements  ProductAttributes{
  public id!: number;
  public name!: string;
  public skuCode!: string;
  public description?: string;
  public price!: number;
  public kioskId?: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  public readonly kiosk?: KioskModel;
  public readonly orderDetail!: OrderDetailModel[];
  public readonly receiptDetail!: ReceiptDetailModel[];
}

export const initProductModel: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  ProductModel.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skuCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    createdBy:{
      type: DataTypes.INTEGER,
    },
    updatedBy:{
      type: DataTypes.INTEGER,
    }
  },{
    tableName: "Products",
    paranoid: true,
    deletedAt: "deletedAt",
    sequelize,
    version: true,
    indexes: [
      {
        unique: true,
        fields: ['skuCode', 'kioskId']
      },
      {
        fields: ['name', 'createdAt']
      }
    ]
  })
}