import { BaseEntity } from "./BaseEntity";
import { OrderStatus } from "../Enums/OrderStatus";
import { IPurchaseOrder } from "../Interfaces/IPurchaseOrder";
import { OrderDetail } from "./OrderDetail";
import { AuditTrail } from "../VOs/AuditTrail";


export class PurchaseOrders extends BaseEntity{
  public dateOrder: Date;
  public providerId: number;
  public kioskId: number;
  public total: number;
  public status: OrderStatus;
  public details: OrderDetail[] = [];
  public receiptIds: number[];
  public audit: AuditTrail;

  protected constructor(props: IPurchaseOrder) {
    super(props.id);
    this.dateOrder = props.dateOrder;
    this.providerId = props.providerId;
    this.kioskId = props.kioskId;
    this.total = props.total;
    this.status = props.status;
    this.details = props.details;
    this.receiptIds = props.receiptIds;
    this.audit = AuditTrail.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: IPurchaseOrder): PurchaseOrders {
    const errors: string[] = this.Validate(props);
    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new PurchaseOrders(props);
  }

  public static FromDatabase(props: IPurchaseOrder): PurchaseOrders {
    return new PurchaseOrders(props);
  }

  public static Validate(props: IPurchaseOrder): string[] {
    const errors: string[] = [];

    return errors;
  }
}