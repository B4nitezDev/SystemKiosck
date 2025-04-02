import { DbContext } from "./Config/database";
import { initKioskModel } from "./Models/KioskModel";
import { initEmployeeModel } from "./Models/EmployeeModel";
import { AssociateModels } from "./associate-models";
import { initCurrentInventory } from "./Models/CurrentInventory.model";
import { initInventoryMovement } from "./Models/InventoryMovementModel";
import { initOrderDetailModel } from "./Models/OrderDetailModel";
import { initProductModel } from "./Models/ProductModel";
import { initProvider } from "./Models/ProviderModel";
import { initPurchaseOrdersModel } from "./Models/PurchaseOrdersModel";
import { initReceiptDetailModel } from "./Models/ReceiptDetailModel";
import { initReceiptModel } from "./Models/ReceiptModel";
import { initSalesTransactionsModel } from "./Models/SalesTransactionsModel";
import { initTransactionsShopping } from "./Models/TransactionsShopping";

export const initializeDatabase: () => Promise<void> = async (): Promise<void> => {
  // Modelos base primero (sin dependencias)
  initKioskModel(DbContext);
  initProductModel(DbContext);

  // Modelos que dependen de Kiosks y Products
  initEmployeeModel(DbContext);
  initCurrentInventory(DbContext);
  initInventoryMovement(DbContext);

  // Los demás modelos
  initProvider(DbContext);
  initPurchaseOrdersModel(DbContext);
  initOrderDetailModel(DbContext);
  initReceiptModel(DbContext);
  initReceiptDetailModel(DbContext);
  initSalesTransactionsModel(DbContext);
  initTransactionsShopping(DbContext);

  AssociateModels.associate();

  try {
    await DbContext.authenticate()
      .then(() => console.log('Conectado con autenticación de Windows'))
      .catch((err) => console.error('Error al conectar:', err));
    await DbContext.sync({force: true});
    console.log("Database connected and models synced");
  } catch (error: any) {
    console.error("Failed to initialize database:");
    console.error("Message:", error.message);
    console.error("SQL:", error.sql);
    console.error("Errors:", error.errors);
    if (Array.isArray(error.errors)) {
      error.errors.forEach((err: any, i: number) => {
        console.error(`Error #${i + 1}:`, err.message);
      });
    }
  }
}