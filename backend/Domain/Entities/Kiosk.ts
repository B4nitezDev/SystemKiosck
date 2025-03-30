import { BaseEntity } from "./BaseEntity";
import { IKiosk } from "../Interfaces/IKiosk";
import { PhoneNumber } from "../VOs/PhoneNumber";
import { Email } from "../VOs/Email";
import { AuditTrail } from "../VOs/AuditTrail";

export class Kiosk extends BaseEntity {
  public name: string;
  public address?: string | null;
  public description?: string | null;
  public phone?: PhoneNumber;
  public email?: Email
  public UsersList: number[] = [];
  public ProductsList: number[] = [];
  public ReceiptsId: number[] = [];
  public audit: AuditTrail;

  private constructor(props : IKiosk) {
    super(props.id);

    this.name = props.name;
    this.address = props.address;
    this.description = props.description;
    this.email = props.email
      ? Email.Create(props.email)
      : undefined;
    this.phone = props.phone
      ? PhoneNumber.Create(props.phone)
      : undefined;
    this.UsersList = props.UsersList;
    this.ProductsList = props.ProductsList;
    this.ReceiptsId = props.ReceiptsId;
    this.audit = AuditTrail.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: IKiosk): Kiosk {
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

  public static FromPersistence(props: IKiosk): Kiosk {
    return new Kiosk(props);
  }

  private static Validate({email, name, phone}: IKiosk): string[]{
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
