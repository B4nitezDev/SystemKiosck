import { BaseEntity } from "./BaseEntity";
import { KioskInterface } from "../Interfaces/kiosk.interface";
import { PhoneNumberVo } from "../VOs/phone-number.vo";
import { EmailVo } from "../VOs/email.vo";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class Kiosk extends BaseEntity {
  public name: string;
  public address?: string | null;
  public description?: string | null;
  public phone?: PhoneNumberVo;
  public email?: EmailVo
  public UsersList: number[] = [];
  public ProductsList: number[] = [];
  public ReceiptsId: number[] = [];
  public ProviderList: number[] = [];
  public audit: AuditTrailVo;

  private constructor(props : KioskInterface) {
    super(props.id);

    this.name = props.name;
    this.address = props.address;
    this.description = props.description;
    this.email = props.email
      ? EmailVo.Create(props.email)
      : undefined;
    this.phone = props.phone
      ? PhoneNumberVo.Create(props.phone)
      : undefined;
    this.UsersList = props.UsersList;
    this.ProductsList = props.ProductsList;
    this.ReceiptsId = props.ReceiptsId;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: KioskInterface): Kiosk {
    const { name, address, description, email, phone, id = -1, ProductsList = [], UsersList = [], ReceiptsId = [] } = props;

    const errors: string[] = this.Validate(props);

    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new Kiosk({ id, name, address, description, email, phone, ProductsList, UsersList, ReceiptsId });
  }

  public static FromPersistence(props: KioskInterface): Kiosk {
    return new Kiosk(props);
  }

  private static Validate({email, name, phone}: KioskInterface): string[]{
    const errors: string[] = [];

    if(email === null && phone === null){
      errors.push("Invalid parameters");
    }

    if(email === undefined && phone === undefined){
      errors.push("Invalid parameters");
    }

    if((email === "" && phone === "") || name === ""){
      errors.push("Invalid parameters");
    }

    return errors;
  }
}
