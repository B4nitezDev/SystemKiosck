import { DbContext } from "./Config/database";
import { initKioskModel } from "./Models/KioskModel";
import { initEmployeeModel } from "./Models/EmployeeModel";
import { AssociateModels } from "./associateModels";

export const initializeDatabase: () => Promise<void> = async (): Promise<void> => {
  initKioskModel();
  initEmployeeModel();


  AssociateModels.associate();

  try {
    await DbContext.authenticate();
    await DbContext.sync({alter: true});
    console.log("Database connected and models synced");
  } catch (error) {
    console.error("Failed to initialize database: ", error);
  }
}