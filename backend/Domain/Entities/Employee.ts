import { BaseEntity } from "./BaseEntity";
import { IEmployee } from "../Interfaces/employee.interface";
import { EmailVo } from "../VOs/email.vo";
import { PhoneNumberVo } from "../VOs/phone-number.vo";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class Employee extends BaseEntity {
  public name: string;
  public lastName?: string;
  public fistName?: string;
  public email?: EmailVo;
  public phone?: PhoneNumberVo;
  public address?: string;
  public initialDate?: Date;
  public finalDate?: Date;
  public turn?: string;
  public password: string;
  public audit: AuditTrailVo
  public kioskId: number;

  protected constructor(props: IEmployee){
    super(props.id);

    this.name = props.name;
    this.lastName = props.lastName;
    this.fistName = props.fistName;
    this.email = props.email
        ? EmailVo.Create(props.email)
        : undefined;
    this.phone = props.phone
        ? PhoneNumberVo.Create(props.phone)
        : undefined;
    this.address = props.address;
    this.initialDate = props.initialDate;
    this.finalDate = props.finalDate;
    this.turn = props.turn;
    this.password = props.password;
    this.kioskId = props.kioskId;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: IEmployee): Employee {
    // TODO: Validate employed and manage witch Result Pattern
    const errors = this.Validate(props);

    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new Employee(props);
  }

  public static FromPersistence(employee: IEmployee): Employee {
    return new Employee(employee);
  }

  public static Validate(employee: IEmployee): string[] {
    const errors: string[] = [];

    return errors;
  }
}