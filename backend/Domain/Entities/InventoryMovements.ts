import { BaseEntity } from "./BaseEntity";
import { MovementsType } from "../Enums/MovementsTpe";
import { IInventoryMovements } from "../Interfaces/IInventoryMovements";
import { AuditTrail } from "../VOs/AuditTrail";

export class InventoryMovements extends BaseEntity {
  public date: Date;
  public type: MovementsType;
  public productId: number;
  public kioskId: number;
  public quantity: number;
  public observations?: string;
  public audit: AuditTrail;

  protected constructor(props: IInventoryMovements) {
    super(props.id);

    this.date = props.date;
    this.type = props.type;
    this.productId = props.productId;
    this.kioskId = props.kioskId;
    this.quantity = props.quantity;
    this.observations = props.observations;
    this.audit = AuditTrail.create({
      createdAt: props.createdAt,
      createdBy: props.createdBy,
      updatedAt: props.updatedAt,
      updatedBy: props.updatedBy
    })
  }

  public static Create(props: IInventoryMovements): InventoryMovements {
    const errors = this.Validate(props);

    if(errors.length > 0){
      throw new Error(JSON.stringify(
        {
          message: errors.join(" ").trim(),
          data: props
        }
      ))
    }

    return new InventoryMovements(props);
  }

  public static FromPersistence(props: IInventoryMovements): InventoryMovements {
    return new InventoryMovements(props);
  }

  public static Validate(props: IInventoryMovements): string[] {
    const errors: string[] = [];

    return errors;
  }
}