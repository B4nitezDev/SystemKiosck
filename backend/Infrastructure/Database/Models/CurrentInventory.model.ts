import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { ProductModel } from "./ProductModel";
import { KioskModel } from "./KioskModel";

interface CurrentInventoryAttributes {
  id: number;
  productId: number;
  kioskId: number;
  currentStock: number;
  minStock: number;
  lastUpdate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}

interface CurrentInventoryCreationAttributes extends Optional<CurrentInventoryAttributes, "id"> {}

export class CurrentInventoryModel extends Model<CurrentInventoryAttributes, CurrentInventoryCreationAttributes> implements CurrentInventoryAttributes {
  public id!: number;
  public productId!: number;
  public kioskId!: number;
  public currentStock!: number;
  public minStock!: number;
  public lastUpdate!: Date;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  public readonly product!: ProductModel;
  public readonly kiosk!: KioskModel;
}

export const initCurrentInventory: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  CurrentInventoryModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    kioskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Kiosks',
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    currentStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minStock: {
      type: DataTypes.INTEGER,
    },
    lastUpdate: {
      type: DataTypes.DATE,
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
    },
  }, {
    tableName: "CurrentInventories",
    paranoid: true,
    deletedAt: "deletedAt",
    sequelize,
    version: true,
  })
}
