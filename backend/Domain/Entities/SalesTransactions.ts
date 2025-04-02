import { BaseEntity } from "./BaseEntity";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class SalesTransactions extends BaseEntity {
  public date: Date;
  public kioskId: number;
  public employeeId: number;
  public detail: string;
  public total: number;
  public audit: AuditTrailVo;

  protected constructor(props: any) {
    super(props.id);

    this.date = props.date;
    this.kioskId = props.kioskId;
    this.employeeId = props.employeeId;
    this.detail = props.detail;
    this.total = props.total;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: any): SalesTransactions {
    return new SalesTransactions(props);
  }

  public static FromPersistence(props: any): SalesTransactions {
    return new SalesTransactions(props);
  }

  public static Validate(props: any): string[] {
    const errors: string[] = [];

    return errors;
  }
}