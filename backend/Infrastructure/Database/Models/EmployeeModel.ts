import { DataTypes, Model, Optional } from "sequelize";
import { DbContext } from "../Config/database";
import { KioskModel } from "./KioskModel";

interface EmployeeAttributes {
  id: number;
  name: string;
  lastName?: string;
  fistName?: string;
  email?: string;
  phone?: string;
  address?: string;
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

export const initEmployeeModel = () => {
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
      sequelize: DbContext,
    }
  );
};
