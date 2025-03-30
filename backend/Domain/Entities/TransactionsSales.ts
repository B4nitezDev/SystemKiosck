import { BaseEntity } from "./BaseEntity";
import { ITransactionsSales } from "../Interfaces/ITransactionsSales";
import { TransactionsState } from "../Enums/TransactionsState";
import { AuditTrail } from "../VOs/AuditTrail";

export class TransactionsSales extends BaseEntity {
  public date: Date;
  public kioskId: number;
  public employeeId: number;
  public detail: string;
  public total: number;
  public status: TransactionsState;
  public audit: AuditTrail;

  protected constructor(props: ITransactionsSales) {
    super(props.id);

    this.date = props.date;
    this.kioskId = props.kioskId;
    this.employeeId = props.employeeId;
    this.detail = props.detail;
    this.total = props.total;
    this.status = props.status;
    this.audit = AuditTrail.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: ITransactionsSales): TransactionsSales {
    const errors = this.Validate(props);
    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new TransactionsSales(props);
  }

  public static FromPersistence(props: ITransactionsSales): TransactionsSales {
    return new TransactionsSales(props);
  }

  public static Validate(props: ITransactionsSales): string[] {
    const errors: string[] = [];

    return errors;
  }
}