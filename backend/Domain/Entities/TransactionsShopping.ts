import { BaseEntity } from "./BaseEntity";
import { TransactionsSales } from "../Interfaces/transactions-sales";
import { TransactionsShoppingState } from "../Enums/TransactionsShoppingState";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class TransactionsShopping extends BaseEntity {
  public date: Date;
  public kioskId: number;
  public employeeId: number;
  public detail: string;
  public total: number;
  public status: TransactionsShoppingState;
  public audit: AuditTrailVo;

  protected constructor(props: TransactionsSales) {
    super(props.id);

    this.date = props.date;
    this.kioskId = props.kioskId;
    this.employeeId = props.employeeId;
    this.detail = props.detail;
    this.total = props.total;
    this.status = props.status;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: TransactionsSales): TransactionsShopping {
    const errors = this.Validate(props);
    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new TransactionsShopping(props);
  }

  public static FromPersistence(props: TransactionsSales): TransactionsShopping {
    return new TransactionsShopping(props);
  }

  public static Validate(props: TransactionsSales): string[] {
    const errors: string[] = [];

    return errors;
  }
}