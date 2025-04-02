import { BaseEntity } from "./BaseEntity";
import { OrderStatus } from "../Enums/OrderStatus";
import { PurchaseOrderInterface } from "../Interfaces/purchase-order.interface";
import { OrderDetail } from "./OrderDetail";
import { AuditTrailVo } from "../VOs/audit-trail.vo";


export class PurchaseOrders extends BaseEntity{
  public dateOrder: Date;
  public providerId: number;
  public kioskId: number;
  public total: number;
  public status: OrderStatus;
  public details: OrderDetail[] = [];
  public receiptIds: number[];
  public audit: AuditTrailVo;

  protected constructor(props: PurchaseOrderInterface) {
    super(props.id);
    this.dateOrder = props.dateOrder;
    this.providerId = props.providerId;
    this.kioskId = props.kioskId;
    this.total = props.total;
    this.status = props.status;
    this.details = props.details;
    this.receiptIds = props.receiptIds;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: PurchaseOrderInterface): PurchaseOrders {
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

  public static FromDatabase(props: PurchaseOrderInterface): PurchaseOrders {
    return new PurchaseOrders(props);
  }

  public static Validate(props: PurchaseOrderInterface): string[] {
    const errors: string[] = [];

    return errors;
  }
}