import { BaseEntity } from "./BaseEntity";
import { ICurrentInventory } from "../Interfaces/ICurrentInventory";
import { AuditTrail } from "../VOs/AuditTrail";


export class CurrentInventory extends BaseEntity {
  public kioskId: number;
  public productId: number;
  public currentStock: number;
  public minStock: number;
  public lastUpdate: Date;
  public audit: AuditTrail;

  protected constructor(props: ICurrentInventory) {
    super(props.id);
    this.kioskId = props.kioskId;
    this.productId = props.productId;
    this.currentStock = props.currentStock;
    this.minStock = props.minStock;
    this.lastUpdate = props.lastUpdate;
    this.audit = AuditTrail.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: ICurrentInventory): CurrentInventory {
    const errors = this.Validate(props);

    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new CurrentInventory(props);
  }

  public static FromPersistence(props: ICurrentInventory): CurrentInventory {
    return new CurrentInventory(props);
  }

  public static Validate(props: ICurrentInventory): string[] {
    const errors: string[] = [];

    return errors;
  }
}