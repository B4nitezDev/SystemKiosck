export class BaseEntity {
  protected readonly Id: number;

  protected constructor(id: number) {
    this.Id = id;
  }
}