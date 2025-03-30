import { BaseEntity } from "./BaseEntity";
import { IProduct } from "../Interfaces/IProduct";
import { AuditTrail } from "../VOs/AuditTrail";

export class Product extends BaseEntity {
  public name: string;
  public description?: string;
  public price: number;
  public KioskId: number;
  public orderDetailId: number[];
  public receiptDetailId: number[];
  public audit: AuditTrail;

  protected constructor(props: IProduct) {
    super(props.id);
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
    this.KioskId = props.KioskId;
    this.orderDetailId = props.orderDetailId ?? [];
    this.receiptDetailId = props.receiptDetailId ?? [];
    this.audit = AuditTrail.create({
      createdAt: props.createdAt,
      createdBy: props.createdBy,
      updatedAt: props.updatedAt,
      updatedBy: props.updatedBy
    })
  }

  public static Create(props: IProduct): Product {
    const errors = this.Validate(props);

    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new Product(props);
  }

  public static FromPersistence(props: IProduct): Product {
    return new Product(props);
  }

  public static Validate(props: IProduct): string[] {
    const errors: string[] = [];

    return errors;
  }
}