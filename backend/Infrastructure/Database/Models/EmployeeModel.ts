import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { KioskModel } from "./KioskModel";

interface EmployeeAttributes {
  id: number;
  name: string;
  lastName?: string;
  fistName?: string;
  email?: string;
  phone?: string;
  address?: string;
  dni?: string;
  initialDate?: Date;
  finalDate?: Date;
  turn?: string;
  password: string;
  kioskId: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
}

interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, "id"> {}

export class EmployeeModel extends Model<EmployeeAttributes, EmployeeCreationAttributes>
  implements EmployeeAttributes {
  public id!: number;
  public name!: string;
  public lastName?: string;
  public fistName?: string;
  public email?: string;
  public phone?: string;
  public address?: string;
  public dni?: string;
  public initialDate?: Date;
  public finalDate?: Date;
  public turn?: string;
  public password!: string;
  public kioskId!: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  // Relaciones
  public readonly kiosk?: KioskModel;
}

export const initEmployeeModel: (sequelize: Sequelize)  => void = (sequelize: Sequelize) => {
  EmployeeModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      fistName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      initialDate: {
        type: DataTypes.DATE,
      },
      finalDate: {
        type: DataTypes.DATE,
      },
      turn: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
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
      createdAt: {
        type: DataTypes.DATE,
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
    },
    {
      tableName: "Employees",
      paranoid: true,
      deletedAt: "deletedAt",
      sequelize,
      version: true,
      indexes: [
        {
          unique: true,
          fields: ["dni", "kioskId"]
        }
      ]
    }
  );
};
