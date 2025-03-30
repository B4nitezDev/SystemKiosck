import { BaseEntity } from "./BaseEntity";
import { ReceiptStatus } from "../Enums/ReceiptStatus";
import { IReceipt } from "../Interfaces/IReceipt";
import { AuditTrail } from "../VOs/AuditTrail";

export class Receipt extends BaseEntity {
  public receiptDate: Date;
  public purchaseOrderId: number;
  public kioskId: number;
  public status: ReceiptStatus;
  public receiptDetails: number[];
  public audit: AuditTrail;

  protected constructor(props: IReceipt) {
    super(props.id);

    this.receiptDate = props.receiptDate;
    this.purchaseOrderId = props.purchaseOrderId;
    this.kioskId = props.kioskId;
    this.status = props.status;
    this.receiptDetails = props.receiptDetails;
    this.audit = AuditTrail.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: IReceipt): Receipt {
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

  public static FromPersistence(props: IReceipt): Receipt {
    return new Receipt(props);
  }

  public static Validate(props: IReceipt): string[] {
    const errors: string[] = [];

    return errors;
  }
}