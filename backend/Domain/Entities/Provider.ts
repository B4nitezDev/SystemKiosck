import { BaseEntity } from "./BaseEntity";
import { IProvider } from "../Interfaces/IProvider";
import { PhoneNumber } from "../VOs/PhoneNumber";
import { Email } from "../VOs/Email";
import { AuditTrail } from "../VOs/AuditTrail";

export class Provider extends BaseEntity {
  public name: string;
  public description?: string;
  public address?: string;
  public phone?: PhoneNumber;
  public email?: Email;
  public kioskId: number;
  public audit: AuditTrail;

  protected constructor(props: IProvider) {
    super(props.id);
    this.name = props.name;
    this.description = props.description;
    this.address = props.address;
    this.phone = props.phone
        ? PhoneNumber.Create(props.phone)
        : undefined;
    this.email = props.email
        ? Email.Create(props.email)
        : undefined;
    this.kioskId = props.kioskId;
    this.audit = AuditTrail.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create (props: IProvider): Provider {
    const errors = this.Validate(props);

    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new Provider(props);
  }

  public static FromPersistence(props: IProvider): Provider {
    return new Provider(props);
  }

  public static Validate(props: IProvider): string[] {
    const errors: string[] = [];

    return errors;
  }
}