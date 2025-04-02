import { BaseEntity } from "./BaseEntity";
import { ProviderInterface } from "../Interfaces/provider.interface";
import { PhoneNumberVo } from "../VOs/phone-number.vo";
import { EmailVo } from "../VOs/email.vo";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class Provider extends BaseEntity {
  public name: string;
  public description?: string;
  public address?: string;
  public phone?: PhoneNumberVo;
  public email?: EmailVo;
  public kioskId: number;
  public audit: AuditTrailVo;

  protected constructor(props: ProviderInterface) {
    super(props.id);
    this.name = props.name;
    this.description = props.description;
    this.address = props.address;
    this.phone = props.phone
        ? PhoneNumberVo.Create(props.phone)
        : undefined;
    this.email = props.email
        ? EmailVo.Create(props.email)
        : undefined;
    this.kioskId = props.kioskId;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create (props: ProviderInterface): Provider {
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

  public static FromPersistence(props: ProviderInterface): Provider {
    return new Provider(props);
  }

  public static Validate(props: ProviderInterface): string[] {
    const errors: string[] = [];

    return errors;
  }
}