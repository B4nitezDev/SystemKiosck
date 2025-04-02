import { OrderStatus } from "../../../Domain/Enums/OrderStatus";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { KioskModel } from "./KioskModel";
import { OrderDetailModel } from "./OrderDetailModel";
import { ProviderModel } from "./ProviderModel";
import { ReceiptModel } from "./ReceiptModel";


interface PurchaseOrdersAttributes {
  id: number;
  dateOrder: Date;
  total: number;
  status: OrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  providerId: number;
  kioskId: number;
}

interface PurchaseOrdersCreationAttributes extends Optional<PurchaseOrdersAttributes, "id"> {}

export class PurchaseOrdersModel extends Model<PurchaseOrdersAttributes, PurchaseOrdersCreationAttributes> implements PurchaseOrdersAttributes{
  public id!: number;
  public dateOrder!: Date;
  public total!: number;
  public status!: OrderStatus;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;
  public providerId!: number;
  public kioskId!: number;

  public readonly provider!: ProviderModel;
  public readonly kiosk!: KioskModel;
  public readonly orderDetail?: OrderDetailModel[];
  public readonly receipt?: ReceiptModel[];
}

export const initPurchaseOrdersModel: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  PurchaseOrdersModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ProviderModel,
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
      onDelete: "NO ACTION"
    },
    dateOrder: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
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
  },{
    tableName: "PurchaseOrders",
    paranoid: true,
    deletedAt: "deletedAt",
    sequelize,
    version: true,
    indexes: [
      {
        unique: true,
        fields: ["kioskId", 'providerId']
      }
    ]
  })
}