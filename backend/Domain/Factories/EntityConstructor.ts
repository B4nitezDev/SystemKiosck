import { BaseEntity } from "../Entities/BaseEntity";

type EntityConstructor<T extends BaseEntity> = {
  Create(props: any): T;
  FromPersistence(props: any): T;
}

export class EntityFactory {
  public static Create<T extends BaseEntity>(entity: EntityConstructor<T>, props: any): T {
    return entity.Create(props);
  }

  public static FromPersistence<T extends BaseEntity>(entity: EntityConstructor<T>, props: any): T {
    return entity.FromPersistence(props);
  }
}