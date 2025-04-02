import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { KioskModel } from "./KioskModel";

interface ProviderAttributes {
  id: number;
  kioskId: number;
  name: string;
  description?: string;
  phone?: string;
  address?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}

interface ProviderCreationAttributes extends Optional<ProviderAttributes, "id"> {}

export class ProviderModel extends Model<ProviderAttributes, ProviderCreationAttributes> implements ProviderAttributes {
  public id!: number;
  public kioskId!: number;
  public name!: string;
  public description?: string;
  public phone?: string;
  public address?: string;
  public email?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  public readonly kiosk!: KioskModel;
}

export const initProvider: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  ProviderModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    email:{
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
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
  },{
    tableName: "Providers",
    paranoid: true,
    deletedAt: "deletedAt",
    sequelize,
    version: true
  })
}