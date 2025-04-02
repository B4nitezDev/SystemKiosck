import { KioskModel } from "./Models/KioskModel";
import { EmployeeModel } from "./Models/EmployeeModel";
import { ProductModel } from "./Models/ProductModel";
import { PurchaseOrdersModel } from "./Models/PurchaseOrdersModel";
import { OrderDetailModel } from "./Models/OrderDetailModel";
import { ReceiptModel } from "./Models/ReceiptModel";
import { ReceiptDetailModel } from "./Models/ReceiptDetailModel";
import { CurrentInventoryModel } from "./Models/CurrentInventory.model";
import { InventoryMovementsModel } from "./Models/InventoryMovementModel";
import { ProviderModel } from "./Models/ProviderModel";
import { TransactionsShoppingModel } from "./Models/TransactionsShopping";
import { SalesTransactionsModel } from "./Models/SalesTransactionsModel";

export class AssociateModels {
  public static associate() {
    // Kiosk ↔ Product
    KioskModel.hasMany(ProductModel, { foreignKey: "kioskId", as: "products" });
    ProductModel.belongsTo(KioskModel, { foreignKey: "kioskId", as: "kiosk" });

    // Kiosk ↔ InventoryMovements
    KioskModel.hasMany(InventoryMovementsModel, { foreignKey: "kioskId", as: "inventoryMovements", constraints: false });
    InventoryMovementsModel.belongsTo(KioskModel, { foreignKey: "kioskId", as: "kiosk", constraints: false });

    // Kiosk ↔ CurrentInventory
    KioskModel.hasMany(CurrentInventoryModel, { foreignKey: 'kioskId', as: 'inventories', constraints: false });
    CurrentInventoryModel.belongsTo(KioskModel, { foreignKey: 'kioskId', as: 'kiosk', constraints: false });

    // Product ↔ InventoryMovements
    ProductModel.hasMany(InventoryMovementsModel, { foreignKey: "productId", as: "inventoryMovements", constraints: false });
    InventoryMovementsModel.belongsTo(ProductModel, { foreignKey: "productId", as: "product", constraints: false });

    // Product ↔ CurrentInventory
    ProductModel.hasOne(CurrentInventoryModel, { foreignKey: 'productId', as: 'currentInventory', constraints: false });
    CurrentInventoryModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product', constraints: false });

    // Provider ↔ PurchaseOrders
    ProviderModel.hasMany(PurchaseOrdersModel, { foreignKey: "providerId", as: "purchaseOrders", constraints: false });
    PurchaseOrdersModel.belongsTo(ProviderModel, { foreignKey: "providerId", as: "provider", constraints: false });

    // PurchaseOrders ↔ OrderDetail
    PurchaseOrdersModel.hasMany(OrderDetailModel, { foreignKey: "purchaseOrderId", as: "orderDetails", constraints: false });
    OrderDetailModel.belongsTo(PurchaseOrdersModel, { foreignKey: "purchaseOrderId", as: "purchaseOrder", constraints: false });

    // Product ↔ OrderDetail
    ProductModel.hasMany(OrderDetailModel, { foreignKey: "productId", as: "orderDetails", constraints: false });
    OrderDetailModel.belongsTo(ProductModel, { foreignKey: "productId", as: "product", constraints: false });

    // PurchaseOrders ↔ Receipt
    PurchaseOrdersModel.hasMany(ReceiptModel, { foreignKey: "purchaseOrderId", as: "receipts" });
    ReceiptModel.belongsTo(PurchaseOrdersModel, { foreignKey: "purchaseOrderId", as: "purchaseOrder" });

    // Kiosk ↔ Receipt
    KioskModel.hasMany(ReceiptModel, { foreignKey: "kioskId", as: "receipts" });
    ReceiptModel.belongsTo(KioskModel, { foreignKey: "kioskId", as: "kiosk" });

    // Receipt ↔ ReceiptDetail
    ReceiptModel.hasMany(ReceiptDetailModel, { foreignKey: "receiptId", as: "receiptDetails" });
    ReceiptDetailModel.belongsTo(ReceiptModel, { foreignKey: "receiptId", as: "receipt" });

    // Product ↔ ReceiptDetail
    ProductModel.hasMany(ReceiptDetailModel, { foreignKey: "productId", as: "receiptDetails" });
    ReceiptDetailModel.belongsTo(ProductModel, { foreignKey: "productId", as: "product" });

    // Kiosk ↔ SalesTransactions
    KioskModel.hasMany(SalesTransactionsModel, { foreignKey: "kioskId", as: "salesTransactions", constraints: false });
    SalesTransactionsModel.belongsTo(KioskModel, { foreignKey: "kioskId", as: "kiosk", constraints: false });

    // Employee ↔ SalesTransactions
    EmployeeModel.hasMany(SalesTransactionsModel, { foreignKey: "employeeId", as: "salesTransactions", constraints: false });
    SalesTransactionsModel.belongsTo(EmployeeModel, { foreignKey: "employeeId", as: "employee", constraints: false });

    // Kiosk ↔ TransactionsShopping
    KioskModel.hasMany(TransactionsShoppingModel, { foreignKey: "kioskId", as: "transactionsShopping", constraints: false });
    TransactionsShoppingModel.belongsTo(KioskModel, { foreignKey: "kioskId", as: "kiosk", constraints: false });

    // Employee ↔ TransactionsShopping
    EmployeeModel.hasMany(TransactionsShoppingModel, { foreignKey: "employeeId", as: "transactionsShopping", constraints: false });
    TransactionsShoppingModel.belongsTo(EmployeeModel, { foreignKey: "employeeId", as: "employee", constraints: false });
  }
}