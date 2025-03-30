import { KioskModel } from "./Models/KioskModel";
import { EmployeeModel } from "./Models/EmployeeModel";


export class AssociateModels {
  public static associate() {
    KioskModel.hasMany(EmployeeModel, {
      foreignKey: "kioskId",
      sourceKey: "id",
      as: "employees"
    });

    EmployeeModel.belongsTo(KioskModel, {
      foreignKey: "kioskId",
      targetKey: "id",
      as: "kiosk"
    });
  }
}