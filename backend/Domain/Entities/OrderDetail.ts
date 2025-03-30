import { BaseEntity } from "./BaseEntity";
import { IOrderDetail } from "../Interfaces/IOrderDetail";
import { Quantity } from "../VOs/Quantity";
import { AuditTrail } from "../VOs/AuditTrail";

export class OrderDetail extends BaseEntity {
  public orderId: number;
  public productId: number;
  public quantity: Quantity;
  public unitPrice: number;
  public total: number;
  public audit: AuditTrail;

  protected constructor(props: IOrderDetail) {
    super(props.id);

    this.orderId = props.orderId
    this.productId = props.productId;
    this.quantity = Quantity.Create(props.quantity);
    this.unitPrice = props.unitPrice;
    this.total = props.total;
    this.audit = AuditTrail.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: IOrderDetail): OrderDetail {
    return new OrderDetail(props);
  }

  public static FromPersistence(props: IOrderDetail): OrderDetail {
    return new OrderDetail(props);
  }

  public static Validate(props: IOrderDetail): string[] {
    const errors: string[] = [];

    return errors;
  }
}