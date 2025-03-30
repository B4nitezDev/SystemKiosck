import { BaseEntity } from "./BaseEntity";
import { IReceiptDetail } from "../Interfaces/IReceiptDetail";
import { Quantity } from "../VOs/Quantity";
import { AuditTrail } from "../VOs/AuditTrail";

export class ReceiptDetail extends BaseEntity {
  public receiptId: number;
  public productId: number;
  public quantity: Quantity;
  public observation?: string;
  public audit: AuditTrail;

  protected constructor(props: IReceiptDetail) {
    super(props.id);

    this.receiptId = props.receiptId;
    this.productId = props.productId;
    this.quantity = Quantity.Create(props.quantity);
    this.observation = props.observation;
    this.audit = AuditTrail.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: IReceiptDetail): ReceiptDetail {
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

  public static FromPersistence(props: IReceiptDetail): ReceiptDetail {
    return new ReceiptDetail(props);
  }

  public static validate(props: IReceiptDetail): string[] {
    const errors: string[] = [];

    return errors;
  }
}