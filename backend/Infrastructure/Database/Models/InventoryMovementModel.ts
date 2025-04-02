import { MovementsType } from "../../../Domain/Enums/MovementsTpe";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { ProductModel } from "./ProductModel";
import { KioskModel } from "./KioskModel";

interface InventoryMovementAttributes {
  id: number;
  date: Date;
  productId: number;
  kioskId: number;
  quantity: number;
  observations?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}

interface InventoryMovementCreationAttributes extends Optional<InventoryMovementAttributes, "id"> {}

export class InventoryMovementsModel extends Model<InventoryMovementAttributes> implements InventoryMovementAttributes {
  public id!: number;
  public date!: Date;
  public quantity!: number;
  public observations?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;
  public productId!: number;
  public kioskId!: number;

  public readonly product!: ProductModel;
  public readonly kiosk!: KioskModel;
}

export const initInventoryMovement: (sequelize: Sequelize) => void = (sequelize: Sequelize) => {
  InventoryMovementsModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ProductModel,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    kioskId:{
      type: DataTypes.INTEGER,
      references: {
        model: KioskModel,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observations: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "InventoryMovements",
    paranoid: true,
    deletedAt: "deletedAt",
    sequelize,
    version: true,
    indexes: [
      {
        unique: true,
        fields: ["productId", "kioskId", "createdAt"]
      }
    ]
  })
}