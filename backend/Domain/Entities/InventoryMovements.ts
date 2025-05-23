﻿import { BaseEntity } from "./BaseEntity";
import { MovementsType } from "../Enums/MovementsTpe";
import { InventoryMovementsInterface } from "../Interfaces/inventory-movements.interface";
import { AuditTrailVo } from "../VOs/audit-trail.vo";

export class InventoryMovements extends BaseEntity {
  public date: Date;
  public type: MovementsType;
  public productId: number;
  public kioskId: number;
  public quantity: number;
  public observations?: string;
  public audit: AuditTrailVo;

  protected constructor(props: InventoryMovementsInterface) {
    super(props.id);

    this.date = props.date;
    this.type = props.type;
    this.productId = props.productId;
    this.kioskId = props.kioskId;
    this.quantity = props.quantity;
    this.observations = props.observations;
    this.audit = AuditTrailVo.create({
      createdAt: props.createdAt,
      createdBy: props.createdBy,
      updatedAt: props.updatedAt,
      updatedBy: props.updatedBy
    })
  }

  public static Create(props: InventoryMovementsInterface): InventoryMovements {
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

  public static FromPersistence(props: InventoryMovementsInterface): InventoryMovements {
    return new InventoryMovements(props);
  }

  public static Validate(props: InventoryMovementsInterface): string[] {
    const errors: string[] = [];

    return errors;
  }
}