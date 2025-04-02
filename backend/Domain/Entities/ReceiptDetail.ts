import { BaseEntity } from "./BaseEntity";
import { ReceiptDetail } from "../Interfaces/receipt-detail";
import { QuantityVo } from "../VOs/quantity.vo";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class ReceiptDetail extends BaseEntity {
  public receiptId: number;
  public productId: number;
  public quantity: QuantityVo;
  public observation?: string;
  public audit: AuditTrailVo;

  protected constructor(props: ReceiptDetail) {
    super(props.id);

    this.receiptId = props.receiptId;
    this.productId = props.productId;
    this.quantity = QuantityVo.Create(props.quantity);
    this.observation = props.observation;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: ReceiptDetail): ReceiptDetail {
    const errors = this.validate(props);

    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new ReceiptDetail(props);
  }

  public static FromPersistence(props: ReceiptDetail): ReceiptDetail {
    return new ReceiptDetail(props);
  }

  public static validate(props: ReceiptDetail): string[] {
    const errors: string[] = [];

    return errors;
  }
}