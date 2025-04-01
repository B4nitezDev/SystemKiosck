import { ReceiptStatus } from "../../../Domain/Enums/ReceiptStatus";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { PurchaseOrdersModel } from "./PurchaseOrdersModel";
import { ReceiptDetailModel } from "./ReceiptDetailModel";
import { KioskModel } from "./KioskModel";

interface ReceiptAttributes {
  id: number;
  status: ReceiptStatus;
  purchaseOrderId: number;
  kioskId: number;
  receiptDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}

interface ReceiptCreationAttributes extends Optional<ReceiptAttributes, "id"> {}

export class ReceiptModel extends Model<ReceiptAttributes, ReceiptCreationAttributes> implements ReceiptAttributes {
  public id!: number;
  public receiptDate!: Date;
  public purchaseOrderId!: number;
  public kioskId!: number;
  public status!: ReceiptStatus;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  public readonly purchaseOrder!: PurchaseOrdersModel;
  public readonly receiptDetail!: ReceiptDetailModel[];
  public readonly kiosk!: KioskModel;
}

export const initReceiptModel: (sequelize: Sequelize) => void = (sequelize: Sequelize): void => {
  ReceiptModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    purchaseOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: PurchaseOrdersModel,
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
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
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
    receiptDate: {
      type: DataTypes.DATE,
    }
  }, {
    tableName: "Receipts",
    sequelize,
  })
}
