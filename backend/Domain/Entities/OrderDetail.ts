import { BaseEntity } from "./BaseEntity";
import { IOrderDetail } from "../Interfaces/order-detail.interface";
import { QuantityVo } from "../VOs/quantity.vo";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class OrderDetail extends BaseEntity {
  public orderId: number;
  public productId: number;
  public quantity: QuantityVo;
  public unitPrice: number;
  public total: number;
  public audit: AuditTrailVo;

  protected constructor(props: IOrderDetail) {
    super(props.id);

    this.orderId = props.orderId
    this.productId = props.productId;
    this.quantity = QuantityVo.Create(props.quantity);
    this.unitPrice = props.unitPrice;
    this.total = props.total;
    this.audit = AuditTrailVo.create({
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