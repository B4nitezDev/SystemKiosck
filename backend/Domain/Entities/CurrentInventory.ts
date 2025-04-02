import { BaseEntity } from "./BaseEntity";
import { CurrentInventoryInterface } from "../Interfaces/current-inventory.interface";
import { AuditTrailVo } from "../VOs/audit-trail.vo";


export class CurrentInventory extends BaseEntity {
  public kioskId: number;
  public productId: number;
  public currentStock: number;
  public minStock: number;
  public lastUpdate: Date;
  public audit: AuditTrailVo;

  protected constructor(props: CurrentInventoryInterface) {
    super(props.id);
    this.kioskId = props.kioskId;
    this.productId = props.productId;
    this.currentStock = props.currentStock;
    this.minStock = props.minStock;
    this.lastUpdate = props.lastUpdate;
    this.audit = AuditTrailVo.create({
      createdBy: props.createdBy,
      createdAt: props.createdAt,
      updatedBy: props.updatedBy,
      updatedAt: props.updatedAt
    })
  }

  public static Create(props: CurrentInventoryInterface): CurrentInventory {
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

  public static FromPersistence(props: CurrentInventoryInterface): CurrentInventory {
    return new CurrentInventory(props);
  }

  public static Validate(props: CurrentInventoryInterface): string[] {
    const errors: string[] = [];

    return errors;
  }
}