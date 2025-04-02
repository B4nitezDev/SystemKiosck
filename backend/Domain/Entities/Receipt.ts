import { BaseEntity } from "./BaseEntity";
import { ReceiptStatus } from "../Enums/ReceiptStatus";
import { ReceiptInterface } from "../Interfaces/receipt.interface";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class Receipt extends BaseEntity {
  public receiptDate: Date;
  public purchaseOrderId: number;
  public kioskId: number;
  public status: ReceiptStatus;
  public receiptDetails: number[];
  public receiptKey?: string;
  public externalReceiptKey?: string;
  public audit: AuditTrailVo;

  protected constructor(props: ReceiptInterface) {
    super(props.id);

    this.receiptDate = props.receiptDate;
    this.purchaseOrderId = props.purchaseOrderId;
    this.kioskId = props.kioskId;
    this.status = props.status;
    this.receiptDetails = props.receiptDetails;
    this.receiptKey = props.receiptKey;
    this.externalReceiptKey = props.externalReceiptKey;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: ReceiptInterface): Receipt {
    const errors: string[] = this.Validate(props);
    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new Receipt(props);
  }

  public static FromPersistence(props: ReceiptInterface): Receipt {
    return new Receipt(props);
  }

  public static Validate(props: ReceiptInterface): string[] {
    const errors: string[] = [];

    return errors;
  }
}