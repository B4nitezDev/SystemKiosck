﻿export class AuditTrail {

  private constructor(
    public readonly createdAt: Date,
    public readonly createdBy?: number,
    public readonly updatedAt?: Date,
    public readonly updatedBy?: number,
  ) {
  }

  public static create(props: {
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: number;
    updatedBy?: number;
  }): AuditTrail {
    return new AuditTrail(
      props.createdAt ?? new Date(),
      props.createdBy,
      props.updatedAt,
      props.updatedBy
    );
  }
}